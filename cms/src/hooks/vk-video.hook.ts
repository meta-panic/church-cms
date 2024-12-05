import { Core } from "@strapi/strapi";
import type { Event } from '@strapi/database/dist/lifecycles';

import path from 'path';
const { ApplicationError } = require("@strapi/utils").errors;

import { VKScrapeService } from "../services/vk-scrapper.interface";
import { Folder, StrapiMediaService, isFolder } from "../services/strapi-media.interface";
import { downloadFile } from "../utils/downloadFIle";
import { getTimestamp } from "../utils/getTimestamp";

const VIDEO_THUMBNAILS_SUBFOLDER = 'video_thumbnails';

export default (
  strapi: Core.Strapi,
  vkScrapeService: VKScrapeService,
  strapiMediaService: StrapiMediaService,
) => {
  strapi.db.lifecycles.subscribe({
    models: ["shared.vk-video"],
    async beforeCreate(event) {
      try {
        await proccessVideoThumbnail(event);
      } catch (error) {
        console.error('Error in beforeUpdate hook:', error);
        throw new ApplicationError(`Failed to process VK video update: ${error}`);
      }
    },
    async beforeUpdate(event) {
      try {
        if (hasThumbnail(event.params.data)) {
          console.info(`The component already has a thumbnail set`)
          return;
        }

        const currentComponent = await getComponentById(event.params.where.id);

        // The current component has a thumbnail, but event.params.data.thumbnail is null
        // Indicating the thumbnail was removed
        // Therefore, the corresponding media file needs to be deleted
        if (hasThumbnail(currentComponent)) {
          await strapiMediaService.deleteFile(currentComponent.thumbnail.id);
          return;
        }

        await proccessVideoThumbnail(event);
      } catch (error) {
        console.error('Error in beforeUpdate hook:', error);
        throw new ApplicationError(`Failed to process VK video update: ${error}`);
      }
    },
    async beforeDelete(event) {
      const currentComponent = await getComponentById(event.params.where.id);

      if (hasThumbnail(currentComponent)) {
        await strapiMediaService.deleteFile(currentComponent.thumbnail.id);
      }
    }
  });

  async function proccessVideoThumbnail(event: Event) {
    assertLinkField(event.params.data);
    const thumbnailUrl: URL | undefined = await vkScrapeService.scrapeVKThumbnail(event.params.data.link);

    if (!thumbnailUrl) {
      console.log('No thumbnail was scrapped by URL: ', event.params.data.link);
      return;
    }

    let pathToFile: string;
    let cleanupTmpFile: () => void;
    try {
      const [path, cleanupFn] = await downloadFile(thumbnailUrl, generateThumbnailName(thumbnailUrl));
      pathToFile = path;
      cleanupTmpFile = cleanupFn;
      console.log('File saved to: ', pathToFile)
    }
    catch (error) {
      console.error(`File was not downloaded due: ${error}`);
      return;
    }

    let folder: Folder;
    try {
      folder = await getThumbnailsSubFolder();
    } catch (error) {
      console.error(`Folder was not created due: ${error}`);
      return;
    }

    try {
      const uploadedFileStat = await strapiMediaService.uploadFile(pathToFile, folder);
      console.log('File saved. Status: ', uploadedFileStat);
      cleanupTmpFile();


      (event.params.data as any).thumbnail = uploadedFileStat;
    } catch (error) {
      console.error(`Error during uploading file to strapi media: ${error}`);
    }
  }

  async function getComponentById(id: number) {
    return await strapi
      .db
      .query('shared.vk-video')
      .findOne({
        where: {
          id,
        },
        populate: {
          'thumbnail': true, // Populate the 'shared.vk-video' component
        },
      });
  }


  async function getThumbnailsSubFolder(): Promise<Folder> {
    const folderService = strapi.plugins.upload.services.folder;

    let thumbnailsFolder = await strapi
      .query('plugin::upload.folder')
      .findOne({ where: { name: VIDEO_THUMBNAILS_SUBFOLDER } });

    if (!thumbnailsFolder) {
      await folderService.create({ name: VIDEO_THUMBNAILS_SUBFOLDER })
      thumbnailsFolder = await strapi
        .query('plugin::upload.folder')
        .findOne({ where: { name: VIDEO_THUMBNAILS_SUBFOLDER } });
    }

    if (!isFolder(thumbnailsFolder)) {
      throw new Error('Failed to find or create the folder');
    }

    return thumbnailsFolder;
  }
}


function assertLinkField(data: any): asserts data is { link: URL } {
  if (!isLinkFieldValid(data)) {
    throw new ApplicationError("Invalid or missing 'link' field");
  }
}

function isLinkFieldValid(data: any): boolean {
  if (!data || typeof data !== "object") return false;
  if (!("link" in data)) return false; // Check if "link" exists

  const linkValue = data.link;

  // Validate the "link" is a URL
  return isValidURL(linkValue);
}

type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  ext: string;
}

function isValidURL(value: any): value is URL {
  try {
    return value instanceof URL || new URL(value) !== undefined;
  } catch {
    return false;
  }
}

function hasThumbnail(value: unknown): value is { thumbnail: StrapiImage } {
  return (
    !!value &&
    typeof value === 'object' &&
    'thumbnail' in value &&
    !!value.thumbnail &&
    typeof value.thumbnail === 'object' &&
    'id' in value.thumbnail
  );
}

function generateThumbnailName(imageUrl: URL): string {
  console.log(`generateFileName imageUrl: ${imageUrl} `)

  if (imageUrl?.pathname) {
    return path.basename(imageUrl.pathname);
  }

  const { year, month, day, hours, minutes, seconds } = getTimestamp();
  return `videothumbnail_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.${assumeFileExtension(imageUrl)}`;
}


function assumeFileExtension(imageUrl: URL): 'png' | 'webp' {
  const isWebp = imageUrl.toString().includes("type=39");

  if (isWebp) return "webp";

  return "png";
}


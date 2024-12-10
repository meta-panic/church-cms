import { Core } from "@strapi/strapi";
import type { Event } from '@strapi/database/dist/lifecycles';
import { errors } from '@strapi/utils'

import { VKScrapeService } from "../services/vk-scrapper.interface";
import { Folder, StrapiMediaService, isFolder } from "../services/strapi-media.interface";
import { downloadFile } from "../utils/downloadFIle";
import { validateLink } from "./validators";
import { assertLinkField, areLinksEqual, generateThumbnailName, hasLink, hasThumbnail } from "./helpers";

const VIDEO_THUMBNAILS_SUBFOLDER = 'video_thumbnails';

export default (
  strapi: Core.Strapi,
  vkScrapeService: VKScrapeService,
  strapiMediaService: StrapiMediaService,
) => {

  strapi.db.lifecycles.subscribe({
    models: ["shared.vk-video"],
    async beforeCreate(event) {
      assertLinkField(event.params.data);
      validateLink(event.params.data.link.toString());
      try {
        await proccessVideoThumbnail(event);
      } catch (error) {
        console.error('Error in beforeUpdate hook:', error);
        throw new errors.ApplicationError(`Failed to process VK video update: ${error}`);
      }
    },
    async beforeUpdate(event) {
      assertLinkField(event.params.data);
      validateLink(event.params.data.link.toString());

      try {
        const currentComponent = await getComponentById(event.params.where.id);

        console.log('event.params.data - ', event.params.data);
        console.log('currentComponent - ', currentComponent);

        switch (getUpdateType(currentComponent, event)) {
          case 'NO_UPDATE_NEEDED':
            console.info('The component already has the thumbnail set');
            return;

          case 'DELETE_THUMBNAIL':
            console.error('Thumbnail file was manually deleted');
            await strapiMediaService.deleteFile(currentComponent.thumbnail.id);
            return;

          case 'UPDATE_THUMBNAIL':
            console.error('Thumbnail will be updated');
            await strapiMediaService.deleteFile(currentComponent.thumbnail.id);
            await proccessVideoThumbnail(event);
            return;

          case 'SET_THUMBNAIL':
            console.error('Thumbnail will be set');
            await proccessVideoThumbnail(event);
            return;

          default:
            console.log('No action needed');
        }
        console.log('nothing')
      } catch (error) {
        console.error('Error in beforeUpdate hook:', error);
        throw new errors.ApplicationError(`Failed to process VK video update: ${error}`);
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


function getUpdateType(currentComponent: unknown, event: Event) {
  const newComponent = event.params.data;

  if (hasThumbnail(currentComponent) && hasLink(currentComponent) && hasThumbnail(newComponent)
    && areLinksEqual(currentComponent.link, String(newComponent.link))) {
    console.log('NO_UPDATE_NEEDED');
    return 'NO_UPDATE_NEEDED';
  }
  if (hasThumbnail(currentComponent) && !hasThumbnail(newComponent)) {
    console.log('DELETE_THUMBNAIL');
    return 'DELETE_THUMBNAIL';
  }
  if (hasThumbnail(currentComponent) && hasLink(currentComponent)
    && !areLinksEqual(currentComponent.link, newComponent.link)
    && hasThumbnail(newComponent)) {
    console.log('UPDATE_THUMBNAIL');
    return 'UPDATE_THUMBNAIL';
  }
  if (!hasThumbnail(currentComponent) && hasLink(newComponent)) {
    console.log('SET_THUMBNAIL');
    return 'SET_THUMBNAIL';
  }
  console.log('NO_ACTION');
  return 'NO_ACTION';
};


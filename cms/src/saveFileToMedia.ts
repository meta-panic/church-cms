import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { Folder, isFolder } from './services/strapi-media.interface';
import { getTimestamp } from './utils/getTimestamp';

const VIDEO_THUMBNAILS_SUBFOLDER = 'video_thumbnails';

export async function downloadFile(url: URL, to: string = '/tmp/'): Promise<string> {
  console.log(`downloadFile url:${url}, to?: ${to}`);

  const rootDir = process.cwd();
  const fileName = generateFileName(url);
  const filePath = rootDir + to + fileName;

  const response = await axios.get(url.toString(), { responseType: 'arraybuffer' });

  fs.writeFileSync(filePath, response.data);
  console.log(`Image saved to: ${filePath}`);

  return filePath;
}


type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  ext: string;
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


function assumeFileExtension(imageUrl: URL): 'png' | 'webp' {
  const isWebp = imageUrl.toString().includes("type=39");

  if (isWebp) return "webp";

  return "png";
}

function generateFileName(imageUrl: URL): string {
  console.log(`generateFileName imageUrl: ${imageUrl} `)

  if (imageUrl?.pathname) {
    return path.basename(imageUrl.pathname);
  }

  const { year, month, day, hours, minutes, seconds } = getTimestamp();
  return `videothumbnail_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.${assumeFileExtension(imageUrl)}`;
}

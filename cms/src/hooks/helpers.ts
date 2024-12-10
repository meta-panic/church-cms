import path from 'path';
import { errors } from '@strapi/utils'

import { getTimestamp } from "../utils/getTimestamp";

export function generateThumbnailName(imageUrl: URL): string {
  console.log(`generateFileName imageUrl: ${imageUrl} `)

  if (imageUrl?.pathname) {
    return path.basename(imageUrl.pathname);
  }

  const { year, month, day, hours, minutes, seconds } = getTimestamp();
  return `videothumbnail_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.${assumeFileExtension(imageUrl)}`;
}


export function assumeFileExtension(imageUrl: URL): 'png' | 'webp' {
  const isWebp = imageUrl.toString().includes("type=39");

  if (isWebp) return "webp";

  return "png";
}

export function areLinksEqual(oldLink: string | URL, newLink: string | URL): Boolean {
  return oldLink.toString().trim() === newLink.toString().trim();
}

export function hasThumbnail(value: unknown): value is { thumbnail: StrapiImage, [key: string]: unknown } {
  return (
    !!value &&
    typeof value === 'object' &&
    'thumbnail' in value &&
    !!value.thumbnail &&
    typeof value.thumbnail === 'object' &&
    'id' in value.thumbnail
  );
}

export function hasLink(value: unknown): value is { link: string } {
  return (
    !!value &&
    typeof value === 'object' &&
    'link' in value &&
    typeof (value as any).link === 'string'
  );
}

type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  ext: string;
}

export function assertLinkField(data: any): asserts data is { link: URL } {
  function isLinkFieldValid(data: any): boolean {
    if (!data || typeof data !== "object") return false;
    if (!("link" in data)) return false; // Check if "link" exists

    return true
  }

  if (!isLinkFieldValid(data)) {
    throw new errors.ApplicationError("Invalid or missing 'link' field");
  }
}

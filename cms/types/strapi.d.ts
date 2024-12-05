import type { Container as CBase } from '@strapi/types/dist/core/container';

import type { StrapiMediaService } from '../src/services/strapi-media.interface';
import type { VKScrapeService } from '../src/services/vk-scrapper.interface';

declare module '@strapi/types/dist/core/container' {

  // Define service mapping
  interface ServiceMap {
    'service::strapi-media': StrapiMediaService;
    'service::vk-scrapper': VKScrapeService;
  }

  declare interface Container extends CBase {
    get<T extends keyof ServiceMap>(uid: T): ServiceMap[T];
  }
}
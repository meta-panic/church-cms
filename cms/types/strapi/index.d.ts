import type { Strapi as StrapiType } from '@strapi/strapi';
import { StrapiMediaService } from '../../src/services/strapi-media.interface';

declare module '@strapi/strapi' {
  export interface Strapi extends StrapiType {
    service(uid: 'plugin::strapi-media.strapi-media'): StrapiMediaService;
    service(uid: string): unknown;
  }
}
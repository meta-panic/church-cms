import { Core } from "@strapi/strapi";

import createStrapiMediaService from "./services/strapi-media.service";
import createVKScrapperService from "./services/vk-scrapper.service";
import registerVKVideoHooks from "./hooks/vk-video.hook";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    strapi.add('service::strapi-media', (strapi: Core.Strapi) => createStrapiMediaService(strapi));
    strapi.add('service::vk-scrapper', () => createVKScrapperService());
  },
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const mediaService = strapi.get('service::strapi-media');
    const vkScrapeService = strapi.get('service::vk-scrapper');

    registerVKVideoHooks(strapi, vkScrapeService, mediaService);
  },
};


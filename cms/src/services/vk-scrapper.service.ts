import { VKScrapeService } from "./vk-scrapper.interface";

const axios = require('axios');
const cheerio = require('cheerio');


export default (): VKScrapeService => ({
  /**
   * Scrapes the thumbnail URL from a VK video or clip page.
   *
   * @example
   * - "https://vk.com/video-{ownerId}_{videoId}" (e.g., "https://vk.com/video-200596867_456239370")
   * - "https://vk.com/{groupName}?z=clip-{ownerId}_{clipId}" (e.g., "https://vk.com/exb_nsk?z=clip-200596867_456239494")
   *
   */
  async scrapeVKThumbnail(videoUrl: URL): Promise<URL | undefined> {
    try {
      const response = await axios.get(videoUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*; q = 0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Connection': 'keep-alive',
          'Referer': 'https://vk.com/',
        },
      });

      const $ = cheerio.load(response.data);

      // Extract thumbnail from meta tag
      const thumbnailUrl = $('meta[property="og:image"]').attr('content');

      console.log("Thumbnail URL: ", thumbnailUrl);
      return thumbnailUrl;
    } catch (error) {
      console.error("Error scraping VK: ", error);
    }
  },
});


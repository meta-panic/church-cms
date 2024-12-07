export interface VKScrapeService {
  scrapeVKThumbnail: (videoUrl: URL) => Promise<URL | undefined>;
}

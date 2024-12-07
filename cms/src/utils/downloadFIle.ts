import axios from 'axios';
import fs from 'fs';


export type CleanupFn = () => void;

export async function downloadFile(url: URL, newFileName: string, to: string = '/tmp/'): Promise<[string, CleanupFn]> {
  console.log(`downloadFile url:${url}, to?: ${to}`);

  const rootDir = process.cwd();
  const filePath = rootDir + to + newFileName;

  const response = await axios.get(url.toString(), { responseType: 'arraybuffer' });

  fs.writeFileSync(filePath, response.data);
  console.log(`Image saved to: ${filePath}`);

  const cleanup = () => {
    try {
      fs.unlinkSync(filePath);
      console.log(`Cleaned up temporary file: ${filePath}`);
    } catch (error) {
      console.error(`Failed to cleanup file ${filePath}:`, error);
    }
  };

  return [filePath, cleanup];
}

import path from "path";
import fs from 'fs';
import { Core } from "@strapi/strapi";

import { Folder, StrapiMediaService } from "./strapi-media.interface";

var mime = require('mime');


export default (strapi: Core.Strapi): StrapiMediaService => ({
  async uploadFile(filePath: string, folder: Folder): Promise<void> {
    console.log(`uploadFile filePath: ${filePath}, folder: ${folder.name}`);

    var stats = fs.statSync(filePath);
    const fileName = path.basename(filePath);

    const responce = await strapi
      .plugin('upload')
      .service('upload')
      .upload({
        data: {
          path: folder.name,
          fileInfo: { folder: folder.id },
        },
        files: {
          path: filePath,
          filepath: filePath,
          originalFilename: fileName,
          mimetype: mime.getType(fileName),
          size: stats.size,
        },
      });


    return responce;
  },
  async deleteFile(fileId: number): Promise<void> {
    console.log(`deleteFile by id: ${fileId}`);

    try {
      await strapi
        .db
        .query('plugin::upload.file')
        .delete({
          where: { id: fileId },
        });
    } catch (error) {
      console.error(`Failed to delete file with id ${fileId}:`, error);
      throw error;
    }
  }
});



export interface StrapiMediaService {
  uploadFile: (filePath: string, folder: Folder) => Promise<void>;
  deleteFile: (FileId: number) => Promise<void>;
}

export type Folder = {
  id: number;
  name: string; // Folder name
  path: string; // Folder path (e.g., /uploads/kek)
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
};

export function isFolder(data: any): data is Folder {
  return typeof data === 'object' &&
    data !== null &&
    typeof data.id === 'number' &&
    typeof data.name === 'string' &&
    typeof data.path === 'string';
}

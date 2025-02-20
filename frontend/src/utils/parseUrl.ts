export const hasAnchor = (url: string): boolean => {
  return url.includes("#");
};

export const getBaseUrl = (url: string): string => {
  return url.split("#")[0];
};

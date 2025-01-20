import "server-only";


export async function getData(): Promise<string> {
  return Promise.resolve(new Date().toString());

};

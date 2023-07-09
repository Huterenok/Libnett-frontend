import httpClient from './httpClient';

export const example = async () => {
  return await httpClient.get(`/example`);
};

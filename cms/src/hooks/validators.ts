import { errors } from '@strapi/utils'

const LINK_VALIDATE_MESSAGE = 'Please, insert a valid VK video link. Avalible formats: "https://vk.com/video-{ownerId}_{videoId}" (e.g., "https://vk.com/video-200596867_456239370") or "https://vk.com/{groupName}?z=clip-{ownerId}_{clipId}" (e.g., "https://vk.com/exb_nsk?z=clip-200596867_456239494")';

export function validateLink(link: string, errorMessage: string = LINK_VALIDATE_MESSAGE): void {
  const regex = /https:\/\/vk\.com\/(?:video-\d+_\d+|exb_nsk\?z=clip-\d+_\d+)/;
  const isValid = regex.test(link);
  if (!isValid) {
    throwValidationError(errorMessage);
  }
}

function throwValidationError(message: string): void {
  const errorMessage = {
    value: '',
    errors: [],
    name: '',
    message: '',
    inner: []
  };
  const globalErrorMessage = "You have a valudation issue";

  throw new errors.YupValidationError(errorMessage, message || globalErrorMessage);
}

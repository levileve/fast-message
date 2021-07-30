import {
  cellphoneValidation,
  idValidation,
  mediaTypeValidation,
  messageStatusValidation,
} from './index';

export const messageCreate = {
  from: {
    ...cellphoneValidation,
    errorMessage: 'invalid_from',
  },
  target: {
    ...cellphoneValidation,
    errorMessage: 'invalid_target',
  },
  media: {
    ...mediaTypeValidation,
    optional: true,
  },
  message: {
    in: 'body',
    isString: true,
    optional: true,
    errorMessage: 'invalid_message',
  },
};

export const messageUpdate = {
  id: idValidation,
  from: {
    in: 'body',
    isString: true,
    optional: true,
    errorMessage: 'invalid_from',
  },
  target: {
    in: 'body',
    isString: true,
    optional: true,
    errorMessage: 'invalid_target',
  },
  media: {
    ...mediaTypeValidation,
    optional: true,
  },
  messageStatus: {
    ...messageStatusValidation,
    optional: true,
  },
  message: {
    in: 'body',
    isString: true,
    optional: true,
    errorMessage: 'invalid_message',
  },
};

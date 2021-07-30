import MediaType from '../../enumerators/media-type';
import MessageStatus from '../../enumerators/message-status';

export const idValidation = {
  in: ['params', 'query'],
  isUUID: true,
  errorMessage: 'invalid_id',
};

export const cellphoneValidation = {
  in: 'body',
  custom: {
    options: cellphone => /^[0-9]{13,14}$/g.test(cellphone),
  },
  optional: true,
  errorMessage: 'invalid_cellphone',
};

export const phoneValidation = {
  in: 'body',
  custom: {
    options: phone => /^[0-9]{10,10}$/g.test(phone),
  },
  errorMessage: 'invalid_phone',
};

export const mediaTypeValidation = {
  in: 'body',
  custom: {
    options: media => Object.values(MediaType).some(o => o === media),
  },
  errorMessage: 'invalid_media',
};

export const messageStatusValidation = {
  in: 'body',
  custom: {
    options: media => Object.values(MessageStatus).some(o => o === media),
  },
  errorMessage: 'invalid_message_status',
};

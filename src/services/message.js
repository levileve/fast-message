import MessageRepository from '../db/repositories/message';

import BusinessError, { ValidationCodeError } from '../utilities/errors/business';
import { servicePaginationHelper } from '../utilities/utils';

import MessageStatus from '../enumerators/message-status';
import MediaType from '../enumerators/media-type';

import getAllFilter from './filters/message';

export default class MessageService {
  static async create(message) {
    let response = null;

    const messageToCreate = MessageService.fieldToCreate(message);

    const messageCreated = await MessageRepository.create(messageToCreate);

    response = await MessageService.getByIdWithValidationIfExist(messageCreated._id);

    return response;
  }

  static async createOrGetRandom(message) {
    let response = null;

    if (message.message) {
      response = await MessageService.create(message);
    } else {
      const { where } = getAllFilter();
      response = await MessageRepository.selectOneRandom(where);

    }

    return response;
  }

  static async updateById(id, message) {
    let response = null;

    const exist = await MessageService.getByIdWithValidationIfExist(id);

    MessageService.validationMessageOldStatus(exist.messageStatus);

    const messageToUpdate = MessageService.fieldToUpdate(message, exist);

    await MessageRepository.updateById(id, messageToUpdate);

    response = await MessageService.getByIdWithValidationIfExist(id);

    return response;
  }

  static fieldToUpdate(newMessage, oldMessage) {
    let response = null;

    const ifMessageIsChange = newMessage.message && newMessage.message !== oldMessage.message
      && MessageStatus.EDITED;

    const ifNewStatusIsCreated = newMessage.messageStatus && newMessage.messageStatus === MessageStatus.CREATED
      && oldMessage.messageStatus;

    const ifNewStatusIsEdited = newMessage.messageStatus && newMessage.messageStatus === MessageStatus.EDITED
      && oldMessage.messageStatus;

    const ifOldStatusIsNotReported = newMessage.messageStatus && newMessage.messageStatus === MessageStatus.REVISED
      && oldMessage.messageStatus !== MessageStatus.REPORTED
      && oldMessage.messageStatus;

    const messageStatus = ifMessageIsChange
      || ifNewStatusIsEdited
      || ifNewStatusIsCreated
      || ifOldStatusIsNotReported
      || newMessage.messageStatus
      || oldMessage.messageStatus;

    const media = newMessage.media || oldMessage.media;
    const message = newMessage.message || oldMessage.message;

    response = {
      media,
      message,
      messageStatus,
    };

    return response;
  }

  static fieldToCreate(messageToCreate) {
    let response = null;

    const { from, target, message } = messageToCreate;
    const media = messageToCreate.media || MediaType.TEXT;
    const messageStatus = MessageStatus.CREATED;

    response = {
      from,
      target,
      media,
      message,
      messageStatus,
    };

    return response;
  }

  static validationMessageOldStatus(messageStatus) {
    if (messageStatus === MessageStatus.BANNED) {
      throw new BusinessError(MessageStatus.BANNED, 'message');
    }
  }

  static async getByIdWithValidationIfExist(id) {
    let response = null;

    response = await MessageRepository.selectOne({ _id: id, deletedAt: null });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'message'); }

    return response;
  }

  static async getAllWithCount(searchParameter) {
    let response = null;
    const { where } = getAllFilter(searchParameter);
    const options = servicePaginationHelper(searchParameter);
    response = await MessageRepository.selectManyWithCount(where, options);

    return response;
  }

  static async deleteById(id) {
    await MessageService.getByIdWithValidationIfExist(id);
    await MessageRepository.deleteById(id);
  }
}

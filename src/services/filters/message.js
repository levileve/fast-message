import MessageStatus from '../../enumerators/message-status';

export default (searchParameter, includeDeleted = false) => {
  const where = {};

  if (!includeDeleted) {
    where.deletedAt = null;
  }

  // -=-=-=- Message Where -=-=-=-

  if (searchParameter && searchParameter.from) {
    where.from = { $regex: new RegExp(`^${searchParameter.from.toLowerCase()}`, 'i') };
  }

  if (searchParameter && searchParameter.target) {
    where.target = { $regex: new RegExp(`^${searchParameter.target.toLowerCase()}`, 'i') };
  }

  if (searchParameter && searchParameter.media) {
    where.media = searchParameter.media;
  }

  if (searchParameter && searchParameter.message) {
    where.message = { $regex: new RegExp(`^${searchParameter.message.toLowerCase()}`, 'i') };
  }

  if (searchParameter && searchParameter.messageStatus) {
    where.messageStatus = { $regex: new RegExp(`^${searchParameter.messageStatus.toLowerCase()}`, 'i') };
  } else {
    where.messageStatus = { $ne: MessageStatus.BANNED };
  }

  return { where };
};

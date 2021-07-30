// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (query) => {
  const searchParameter = {};

  // -=-=-=- Message Where -=-=-=-

  if (query.from && query.from.trim().length > 0) {
    searchParameter.from = query.from.trim();
  }

  if (query.target && query.target.trim().length > 0) {
    searchParameter.target = query.target.trim();
  }

  if (query.media && query.media.trim().length > 0) {
    searchParameter.media = query.media.toLowerCase().trim();
  }

  if (query.message && query.message.trim().length > 0) {
    searchParameter.message = query.message.trim();
  }

  if (query.messageStatus && query.messageStatus.trim().length > 0) {
    searchParameter.messageStatus = query.messageStatus.toLowerCase().trim();
  }

  return searchParameter;
};

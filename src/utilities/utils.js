export function controllerPaginationHelper(searchParameter) {
  const limit = Number.parseInt(searchParameter.limit, 10) || 10;
  const offset = (searchParameter.offset && Number.parseInt(searchParameter.offset, 10) * limit) || 0;
  const orderBy = searchParameter.orderBy ? searchParameter.orderBy : 'createdAt';
  const isDESC = searchParameter.isDESC && searchParameter.isDESC.toLowerCase() === 'true' ? -1 : 1;

  return {
    offset,
    orderBy,
    isDESC,
    limit,
  };
}

export function servicePaginationHelper(searchParameter) {
  const limit = searchParameter.limit || 10;
  const offset = searchParameter.offset || 0;
  const orderBy = searchParameter.orderBy || 'createdAt';
  const isDESC = searchParameter.isDESC || 1;

  return {
    offset,
    orderBy,
    isDESC,
    limit,
  };
}

export function tryToJSON(str) {
  let response;

  try {
    response = str.toJSON();
  } catch (e) {
    return str;
  }

  return response;
}

import ExtendableError from './extendable-error';

export default class BusinessError extends ExtendableError {
  constructor(code, options) {
    super();
    this.code = code;
    this.options = options;
  }
}

export const ValidationCodeError = {
  INVALID_ID: 'invalid_id',
  INVALID_PARAMS: 'invalid_params',
  ENTITY_NOT_FOUND: 'entity_not_found',
  ENTITY_ALREADY_EXISTS: 'entity_already_exists',
  ENTITY_ALREADY_CREATED: 'entity_already_created',
  INVALID_QUANTITY: 'invalid_quantity',
};

export const UserCodeError = {
  INVALID_OLD_PASSWORD: 'invalid_old_password',
};

export const LentCodeError = {
  MOVIE_DEVOLUTION_MUST_MADE_BY_PERSON_RESPONSIBLE: 'movie_devolution_must_made_by_person_responsible',
  LENT_IS_COMPLETED: 'lent_is_completed',
  OUT_OF_STOCK: 'out_of_stock',
};

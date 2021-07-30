import {
  checkSchema as realCheckSchema,
  validationResult,
} from 'express-validator';

export default function checkSchema(schema) {
  return [
    realCheckSchema(schema),
    (req, res, next) => {
      try {
        validationResult(req).throw();
        next();
      } catch (err) {
        next(err);
      }
    },
  ];
}

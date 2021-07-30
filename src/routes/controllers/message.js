import express from 'express';
import httpStatus from 'http-status';
import { param, validationResult } from 'express-validator';
import { controllerPaginationHelper } from '../../utilities/utils';
import MessageService from '../../services/message';
import { errorHandler, checkSchema } from '../middlewares';
import { messageCreate, messageUpdate } from '../schemas/message';
import { ValidationCodeError } from '../../utilities/errors/business';
import { getAllFilter } from './filters/message';

const routes = express.Router();

routes.post('/',
  checkSchema(messageCreate),
  async (req, res) => {
    let response;

    try {
      response = await MessageService.createOrGetRandom(req.body);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/:id',
  param('id').isUUID().withMessage(ValidationCodeError.INVALID_ID),
  async (req, res) => {
    let response;

    try {
      validationResult(req).throw();
      response = await MessageService.getByIdWithValidationIfExist(req.params.id);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/',
  async (req, res) => {
    let response;

    try {
      const searchParameter = {
        ...controllerPaginationHelper(req.query),
        ...getAllFilter(req.query),
      };

      response = await MessageService.getAllWithCount(searchParameter);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.put('/:id',
  checkSchema(messageUpdate),
  async (req, res) => {
    let response;

    try {
      response = await MessageService.updateById(req.params.id, req.body);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.delete('/:id',
  param('id').isUUID().withMessage(ValidationCodeError.INVALID_ID),
  async (req, res) => {
    let response;

    try {
      validationResult(req).throw();
      response = await MessageService.deleteById(req.params.id);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

export default routes;

import httpStatus from 'http-status';
import BusinessError from '../../utilities/errors/business';
import UnauthorizedError from '../../utilities/errors/unauthorized';
import ForbiddenError from '../../utilities/errors/forbidden';

export default function errorHandler(err, req, res) {
  if (err.errors && err.errors.length > 0) {
    const error = err.errors.pop();

    res.status(httpStatus.BAD_REQUEST).json({
      error: error.msg,
      options: error.param,
    });
  } else if (err instanceof BusinessError) {
    res.status(httpStatus.BAD_REQUEST).json({
      error: err.code,
      options: err.options,
    });
  } else if (err instanceof UnauthorizedError) {
    res.sendStatus(httpStatus.UNAUTHORIZED);
  } else if (err instanceof ForbiddenError) {
    res.sendStatus(httpStatus.FORBIDDEN);
  } else {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

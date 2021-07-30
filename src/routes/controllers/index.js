import express from 'express';

const router = express.Router();

router.use('/message', require('./message').default);

export default router;

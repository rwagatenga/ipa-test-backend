import express from 'express';
import userRouter from './user';

const router = express.Router();

const apiPath = '/api/v1';

router.use(`${apiPath}/users`, userRouter);

export default router;

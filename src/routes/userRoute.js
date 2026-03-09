import express from 'express';
import { userProfile } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/', userProfile)

export default userRouter;

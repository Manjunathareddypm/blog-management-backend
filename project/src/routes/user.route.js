import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


router.post('', newUserValidator, userController.newRegistration);

router.post('/login', userController.userLogin);


export default router;

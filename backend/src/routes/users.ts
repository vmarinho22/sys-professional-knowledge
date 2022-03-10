import { Router } from 'express';

import UserController from '../controllers/UserController';

const routerUser = Router();

routerUser.route('/')
    .post(UserController.index);

routerUser.route('/login')
    .post(UserController.login);

export default routerUser;
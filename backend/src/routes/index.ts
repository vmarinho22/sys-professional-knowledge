import { Router } from 'express';

import IndexController from '../controllers/IndexController';

const routerIndex = Router();

routerIndex.route('/')
    .get(IndexController.index);

export default routerIndex;
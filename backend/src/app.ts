import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import path from 'path';
import * as swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './docs/apidocs';

import routerIndex from './routes/index';
import routerUser from './routes/users';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        // this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(logger('dev'));
        dotenv.config({ path: path.resolve(__dirname, '../.env') });
    }

    private routes() : void {
        this.express.use('/status', routerIndex);
        this.express.use('/users', routerUser);
        this.express.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
    }
}

export default new App().express;
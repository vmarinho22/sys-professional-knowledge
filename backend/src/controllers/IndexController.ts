import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response): Response {
        return res.status(200).json({
            status: 1,
            response: 'API Online'
        });
    }
}

export default new IndexController();
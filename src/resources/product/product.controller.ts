import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/product/product.validation';
import PostService from '@/resources/product/product.service';
import authenticated from '@/middleware/authenticated.middleware';

class PostController implements Controller {
    public path = '/';
    public router = Router();
    private PostService = new PostService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}create-task`,
            validationMiddleware(validate.create),
            authenticated,
            this.create
        );
        this.router.get(`${this.path}list-tasks`, authenticated, this.getProduct);
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { title, body } = req.body;

            const post = await this.PostService.create(title, body);

            res.status(201).json({ post });
        } catch (error) {
            next(new HttpException(400, 'Cannot create post'));
        }
    };
    private getProduct = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
         const listProduct= await this.PostService.find();
         res.status(201).json({ listProduct });
    
    };


}

export default PostController;

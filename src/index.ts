import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import ProductController from '@/resources/product/product.controller';
import UserController from '@/resources/user/user.controller';

validateEnv();

const app = new App(
    [new ProductController(), new UserController()],
    Number(process.env.PORT)
);

app.listen();

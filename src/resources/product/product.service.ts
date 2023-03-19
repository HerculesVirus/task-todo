import ProductModel from '@/resources/product/product.model';
import Product from '@/resources/product/product.interface';

class PostService {
    private task = ProductModel;

    /**
     * Create a new post
     */
    public async create(title: string, body: string): Promise<Product> {
        try {
            const task = await this.task.create({ title });

            return task;
        } catch (error) {
            throw new Error('Unable to create task');
        }
    }

    public async find(): Promise<Product[]> {
        try {
            const post = await this.task.find();

            return post;
        } catch (error) {
            throw new Error('Unable to find task');
        }
    }
}

export default PostService;

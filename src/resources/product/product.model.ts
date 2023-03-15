import mongoose, { Schema, model } from 'mongoose';
import Product from '@/resources/product/product.interface';

const ProductSchema = new Schema(
    {
        
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

export default model<Product>('Product', ProductSchema);

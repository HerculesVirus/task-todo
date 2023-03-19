import mongoose, { Schema, model } from 'mongoose';
import Product from '@/resources/product/product.interface';

const ProductSchema = new Schema(
    {
        
        title: { type: String, required: true },
        description: { type: String,  },
        price: { type: Number,  },
        image: { type: String,  },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

export default model<Product>('Product', ProductSchema);

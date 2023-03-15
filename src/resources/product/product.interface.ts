import { Document } from 'mongoose';
import User from "../user/user.interface"

export default interface Product extends Document {
    user: User["_id"];
    title: string;
    description: string;
    price: number;
    image: string;
}

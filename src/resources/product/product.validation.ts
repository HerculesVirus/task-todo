import Joi from 'joi';

const create = Joi.object({
    // user: User["_id"];
    // title: string;
    // description: string;
    // price: number;
    // image: string;
    title: Joi.string().required(),
    price: Joi.number(),
});

export default { create };

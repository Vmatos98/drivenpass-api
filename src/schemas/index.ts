import Joi from 'joi';
import {createUserData, searchUserData} from "../service/authService.js";

const loginSChemaValidate = Joi.object<searchUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});

const siginSChemaValidate = Joi.object<createUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    userName: Joi.string().required()
})


export {
    loginSChemaValidate,
    siginSChemaValidate
};
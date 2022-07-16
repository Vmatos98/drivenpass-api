import Joi from 'joi';
import {createUserData, searchUserData} from "../service/authService.js";
import {createCredentialData} from "../service/credentialService.js";

type validateCredential = Omit<createCredentialData, "userId">;


const loginSChemaValidate = Joi.object<searchUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});

const siginSChemaValidate = Joi.object<createUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    userName: Joi.string().required()
})

const createCredentialSchemaValidate = Joi.object<validateCredential>({
    url: Joi.string().uri().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    title: Joi.string().required()
});

export {
    loginSChemaValidate,
    siginSChemaValidate,
    createCredentialSchemaValidate
};
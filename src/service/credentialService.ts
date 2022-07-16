import {Credentials} from "@prisma/client";
import Cryptr from "cryptr";

import * as credentialRepository from "../repositories/credentialRepository.js";

export type createCredentialData = Omit<Credentials, "id"|"createdAt">;
const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

async function createCredential(credentialData: createCredentialData){
    const encryptedPassword = cryptr.encrypt(credentialData.password);
    const credential = {...credentialData, password: encryptedPassword};
    await credentialRepository.insertCredential(credential).catch(err => {
        if(err.code === "P2002"){
            throw {type: "conflict", message: "credential title already exists"};
        }
    });
}

export {
    createCredential
}
import prisma from "../config/database.js";
import {createCredentialData} from "../service/credentialService.js";

async function insertCredential(credentialData: createCredentialData){
    return await prisma.credentials.create({
        data: 
            credentialData
    });
}

export {
    insertCredential
};
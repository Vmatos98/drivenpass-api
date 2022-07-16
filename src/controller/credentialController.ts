import {Request, Response} from "express";
import * as credentialService from "../service/credentialService.js";

async function createCredential(req: Request, res: Response) {
    const userId = res.locals.decoded.userId;
    const  data = {...req.body, userId};
    await credentialService.createCredential(data);
    res.sendStatus(201);
}

export{
    createCredential
}
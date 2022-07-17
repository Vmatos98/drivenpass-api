import {Request, Response} from "express";
import * as service from "../service/cardService.js"

async function createCardController(req: Request, res: Response){
    const userId = res.locals.decoded.userId;
    await service.insertCard({...req.body, userId});
    res.sendStatus(201);
}

export {
    createCardController,
}
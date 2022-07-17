import {Request, Response} from "express";
import * as service from "../service/noteService.js"

async function createNoteController(req: Request, res: Response){
    const userId = res.locals.decoded.userId;
    await service.insertNote({...req.body, userId});
    res.sendStatus(201);
}

async function getNoteController(req: Request, res: Response){
    const userId = res.locals.decoded.userId;
    const result = await service.getNotes(userId);
    res.status(200).send(result);
}

export {
    createNoteController,
    getNoteController
}
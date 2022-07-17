import prisma from "../config/database.js";
import {createNotesData} from "../service/noteService.js";

async function insertNote(createNotesData:createNotesData){
    return await prisma.notes.create({
        data: createNotesData,
    })
}

async function getNotes(userId: number){
    return await prisma.notes.findMany({
        where: {
            userId
        }
    })
}

export {
    insertNote,
    getNotes
}
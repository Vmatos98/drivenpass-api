import prisma from "../config/database.js";
import {createNotesData} from "../service/noteService.js";

async function insertNote(createNotesData:createNotesData){
    return await prisma.notes.create({
        data: createNotesData,
    })
}

export {
    insertNote,
}
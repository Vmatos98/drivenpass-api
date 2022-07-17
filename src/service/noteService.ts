import {Notes} from "@prisma/client"
import Cryptr from "cryptr";

import * as repositories from "../repositories/noteRepository.js";

const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
export type createNotesData = Omit<Notes, "id"|"createdAt">;

async function insertNote(createNotesData:createNotesData){
    const{content} = createNotesData;
    const encryptedContent = cryptr.encrypt(content);
    const encryptedNote = {...createNotesData, content: encryptedContent};
    await repositories.insertNote(encryptedNote);
}

export{insertNote};
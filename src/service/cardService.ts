import {Cards} from "@prisma/client"
import Cryptr from "cryptr";

import * as repositories from "../repositories/cardRepository.js";

const cryptr = new Cryptr(process.env.CRYPTR_SECRET.toString());
export type createCardData = Omit<Cards, "id"|"createdAt">;


async function insertCard(createCardData:createCardData){
    const encryptedCard={...createCardData,
        number: cryptr.encrypt(createCardData.number),
        cardName: cryptr.encrypt(createCardData.cardName),
        cvv: cryptr.encrypt(createCardData.cvv),
        password: cryptr.encrypt(createCardData.password)
    }
    await repositories.insertCard(encryptedCard);
}


export {
    insertCard,
}
import prisma from "../config/database.js";
import {createCardData} from "../service/cardService.js"


async function insertCard(createCardData:createCardData){
    return await prisma.cards.create({
        data: createCardData,
    });
}

export {
    insertCard,
}
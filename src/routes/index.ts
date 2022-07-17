import { Router } from "express";

import authRoute from "./authRoutes.js";
import credentialRoute from "./credentialRouter.js";
import noteRouter from "./noteRouter.js";
import cardRouter from "./cardRouter.js";

const router = Router();
router.use(authRoute);
router.use(credentialRoute);
router.use(noteRouter);
router.use(cardRouter);

export default router;
import { Router } from "express";

import authRoute from "./authRoutes.js";
import credentialRoute from "./credentialRouter.js";
import noteRouter from "./noteRouter.js"

const router = Router();
router.use(authRoute);
router.use(credentialRoute);
router.use(noteRouter);

export default router;
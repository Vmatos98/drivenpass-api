import { Router } from "express";

import authRoute from "./authRoutes.js";
import credentialRoute from "./credentialRouter.js";


const router = Router();
router.use(authRoute);
router.use(credentialRoute);

export default router;
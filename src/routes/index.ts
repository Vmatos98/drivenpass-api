import { Router } from "express";

import authRoute from "./authRoutes.js";

const router = Router();
router.use(authRoute);

export default router;
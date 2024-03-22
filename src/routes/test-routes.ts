import { Router } from "express";
import { isValidTriangle } from "../controllers/isValidTriangle";

const router = Router();

router.post("/api/test/techywe/triangle", isValidTriangle);

export default router;

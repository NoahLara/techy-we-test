import { Router } from "express";
import { isValidTriangle } from "../controllers/isValidTriangle";
import { longestConcatenatedString } from "../controllers/longestStringConcat";

const router = Router();

router.post("/api/test/techywe/triangle", isValidTriangle);
router.post("/api/test/techywe/concatenatedString", longestConcatenatedString);

export default router;

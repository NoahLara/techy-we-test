import { Router } from "express";
import { isValidTriangle } from "../controllers/isValidTriangle";
import { longestConcatenatedString } from "../controllers/longestStringConcat";
import { josephusPermutation } from "../controllers/josephusPermutation";

const router = Router();

router.post("/api/test/techywe/triangle", isValidTriangle);
router.post("/api/test/techywe/concatenatedString", longestConcatenatedString);
router.post("/api/test/techywe/josephusPermutation", josephusPermutation);

export default router;

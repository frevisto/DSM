import { Router } from "express";
import math from "./math";
import text from "./text";

const router = Router();

router.use("/math", math);
router.use("/text", text);

export default router;
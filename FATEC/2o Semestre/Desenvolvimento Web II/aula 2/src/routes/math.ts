import { Router } from "express";
import { somar, subtrair } from "../controllers";

const router = Router();

// localhost:3003/math/sum/2/3
router.get("/sum/:a/:b", somar);

// localhost:3003/math/diff?a=2&b=3
router.get("/diff", subtrair);

export default router;
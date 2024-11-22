import { Router } from "express";
import { concatenar, primeiro } from "../controllers";

const router = Router();

// localhost:3003/text/concat/Arley/Souza
router.get("/concat/:first/:last", concatenar);

// localhost:3003/text/first/Arley
router.get("/first/:name", primeiro);

export default router;
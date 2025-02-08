import { Router } from "express";
import { getExample } from "../controllers/myController";

const router = Router();

router.get("/", getExample);

export default router;

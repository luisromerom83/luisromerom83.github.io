import { Router } from "express";
import { methods as functionscontroller } from "../controllers/functions.controller";



const router= Router();

router.get("/", functionscontroller.functionsroute);

export default router;
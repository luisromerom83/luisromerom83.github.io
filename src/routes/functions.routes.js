import { Router } from "express";
import { methods as functionscontroller } from "../controllers/functions.controller";



const router= Router();
console.log("Entro a functions")
router.get("/", functionscontroller.functionsroute);

export default router;
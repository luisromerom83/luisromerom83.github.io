import { Router } from "express";
import { methods as homecontroller } from "../controllers/home.controller";



const router= Router();
console.log("Entro a Home")
router.get("/", homecontroller.homeroute);

export default router;
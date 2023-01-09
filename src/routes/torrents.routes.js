import { Router } from "express";
import { methods as torrentcontroller } from "./../controllers/torrents.controller";



const router= Router();
console.log("Entro a Torrents")
router.post("/", torrentcontroller.savetorrent);
router.get("/", torrentcontroller.mensajeget);

export default router;
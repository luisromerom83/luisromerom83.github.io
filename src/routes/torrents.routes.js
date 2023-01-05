import { Router } from "express";
import { methods as torrentcontroller } from "./../controllers/torrents.controller";



const router= Router();

router.post("/", torrentcontroller.savetorrent);

export default router;
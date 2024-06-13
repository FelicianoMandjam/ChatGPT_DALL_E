import express from "express";
import * as genImgController from "../controllers/genImg.controller.js";

const router = express.Router();

router.post("/", genImgController.genImg);

export default router;

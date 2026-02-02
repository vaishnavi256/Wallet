import express from "express";
import {
  generateWallet,
  generateSeedPhrase,
} from "../controllers/data.controller.js";

const router = express.Router();

router.get("/generateSeedPhrase", generateSeedPhrase);
router.post("/generateWallet", generateWallet);

export default router;

import express from "express";
import {
  generateWallet,
  generateSeedPhrase,
  getUserBalance
} from "../controllers/data.controller.js";

const router = express.Router();

router.get("/generateSeedPhrase", generateSeedPhrase);
router.post("/generateWallet", generateWallet);
router.post ("/balance", getUserBalance);

export default router;

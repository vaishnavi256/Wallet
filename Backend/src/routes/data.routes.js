import express from "express";
import {
  generateWallet,
  generateSeedPhrase,
  getBalance, 
  getTokens
} from "../controllers/data.controller.js";

const router = express.Router();

router.get("/generateSeedPhrase", generateSeedPhrase);
router.post("/generateWallet", generateWallet);
router.post ("/getBalance", getBalance);
router.post ("/getTokens", getTokens)

export default router;

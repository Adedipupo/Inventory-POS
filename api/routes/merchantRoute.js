import express from "express";
import MerchantController from "../controllers/merchantController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();
const merchantController = new MerchantController();

// merchant route

router.post("/create", merchantController.createMerchant);



export default router;

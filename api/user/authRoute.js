import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router();
const authController = new AuthController();

// signup route
router.post("/signup", authController.createUser);

router.post("/login", authController.loginUser);

router.post('/forgotPassword', authController.forgotPassword)

router.patch('/resetPassword/:id/:token', authController.resetPassword)

export default router;

import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();
const userController = new UserController();

// user route

router.post("/users", userController.getUsers);



export default router;

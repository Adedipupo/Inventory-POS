import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();
const userController = new UserController();

// user route

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);



export default router;

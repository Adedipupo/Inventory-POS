import express from "express";
import UserController from "./userController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const userRouter = express.Router();
const userController = new UserController();

// user route

router.get("/users", userController.getUsers);
router.get("/:id",verifyUser, userController.getUser);



export default userRouter;

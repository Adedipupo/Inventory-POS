import express from "express";
import merchantRouter from "../merchant/merchantRoute.js";
import Authrouter from "../user/authRoute.js";
import userRouter from "../user/userRoute.js";



const router = express.Router()

router.get("/", (_req, res) => {
    res.send("api server is live");
  });

router.use("/auth", Authrouter);
router.use("/user", userRouter);
router.use("/merchant", merchantRouter);

export default router;
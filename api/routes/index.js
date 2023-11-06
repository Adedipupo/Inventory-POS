import express from "express";
import authRoute from "./authRoute.js";
import userRoute from "./userRoute.js";
import merchantRoute from "./merchantRoute.js";


const router = express.Router()

router.get("/", (_req, res) => {
    res.send("api server is live");
  });

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/merchant", merchantRoute);

export default router;
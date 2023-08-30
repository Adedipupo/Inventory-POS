import express from "express";
import authRoute from "./authRoute";


const router = express.Router()

router.get("/", (_req, res) => {
    res.send("api server is live");
  });

router.use("/auth", authRoute);

export default router;
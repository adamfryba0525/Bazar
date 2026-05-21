import express from "express";
import { showRegister } from "../controller/authController.js";

const router = express.Router();
router.get("/register", showRegister);
export default router;
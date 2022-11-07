import express from "express";
import { getUser, updateuser } from "../Controllers/UserController.js";

const router = express.Router();


router.get("/:id",getUser)
router.put("/:id",updateuser)

export default router;

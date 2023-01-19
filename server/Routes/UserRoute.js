import express from "express";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  UnFollowUser,
  updateuser,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get('/',getAllUsers)
router.get("/:id", getUser);
router.put("/:id", updateuser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", UnFollowUser);

export default router;

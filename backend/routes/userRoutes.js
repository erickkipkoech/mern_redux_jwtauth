import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/",registerUser);
router.post("/auth", authUser);
router.post("/logout",logoutUser);
//router.get("/profile",getUserProfile);
//router.put("/profile",updateUserProfile);
//alternative for the last 2 routes
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;

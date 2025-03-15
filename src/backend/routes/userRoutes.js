import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  socialLogin,
} from "../controllers/userController.js";
import { changePassword } from "../controllers/changePasswordController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("/social-login", socialLogin);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.put("/change-password", protect, changePassword);

export default router;

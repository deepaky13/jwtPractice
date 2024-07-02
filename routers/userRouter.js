import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userControllers.js";
import { validateUpdateUser } from "../middleware/validationMiddleware.js";
import {
  authorizePermission,
  checkForTestUser,
} from "../middleware/authmiddleware.js";
import uploaded from "../middleware/multermiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermission("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  uploaded.single("avatar"),
  validateUpdateUser, 
  updateUser
);

export default router;

import express from "express";
const router = express.Router();
import {
  getServiceCategories,
  searchServices,
  getServicesByCategory,
} from "../controllers/serviceController.js";

router.get("/categories", getServiceCategories);
router.get("/search", searchServices);
router.get("/:category", getServicesByCategory);

export default router;

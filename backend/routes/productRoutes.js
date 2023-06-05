import express from "express";
import {
  addProduct,
  fetchProducts,
  fetchOneProduct,
  updateProduct,
  deleteRecord,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addProduct);
router.route("/products").get(protect, fetchProducts);
router
  .route("/product")
  .get(protect, fetchOneProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteRecord);

export default router;

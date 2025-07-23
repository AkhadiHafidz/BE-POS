import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import {
  createproduct,
  deleteproduct,
  generateExcel,
  generatePdf,
  getAllproduct,
  getproductBycategory,
  getproductById,
  updateproduct,
} from "../controllers/product.controller.js";
const productRoute = Router();

productRoute.post("/product", autenticate, createproduct);
productRoute.get("/product", autenticate, getAllproduct);
productRoute.get("/product/:id", autenticate, getproductById);
productRoute.get("/product/category/:id", autenticate, getproductBycategory);
productRoute.put("/product/:id", autenticate, updateproduct);
productRoute.delete("/product/:id", autenticate, deleteproduct);
productRoute.get("/product-pdf", autenticate, generatePdf);
productRoute.get("/product-excel", autenticate, generateExcel);

export default productRoute;

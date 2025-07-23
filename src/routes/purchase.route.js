import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import {
  createPurchase,
  generateExcel,
  generatePdf,
  getAllPurchase,
  getPurchaseById,
  purchaseYearly,
} from "../controllers/purchase.controller.js";
const purchaseRouter = Router();

purchaseRouter.post("/purchase", autenticate, createPurchase);
purchaseRouter.get("/purchase", autenticate, getAllPurchase);
purchaseRouter.get("/purchase/:id", autenticate, getPurchaseById);
purchaseRouter.post("/purchase-pdf", autenticate, generatePdf);
purchaseRouter.post("/purchase-excel", autenticate, generateExcel);
purchaseRouter.get("/purchase-year", autenticate, purchaseYearly);

export default purchaseRouter;

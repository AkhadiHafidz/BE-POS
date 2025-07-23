import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import {
  generateExcel,
  generatePdf,
  getAllorder,
  getorderById,
  insertorder,
  orderYearly,
} from "../controllers/order.controller.js";
const orderRouter = Router();

orderRouter.post("/orders/:userId", autenticate, insertorder);
orderRouter.get("/orders/:id", autenticate, getorderById);
orderRouter.get("/orders", autenticate, getAllorder);
orderRouter.post("/orders-pdf", autenticate, generatePdf);
orderRouter.post("/orders-excel", autenticate, generateExcel);
orderRouter.get("/orders-year", autenticate, orderYearly);
export default orderRouter;

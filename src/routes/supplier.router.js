import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import {
  createsupplier,
  deletesupplier,
  generateExcel,
  generatePdf,
  getAllsupplier,
  getsupplierById,
  updatesupplier,
} from "../controllers/supplier.controller.js";
const supplierRouter = Router();

supplierRouter.get("/supplier", autenticate, getAllsupplier);
supplierRouter.get("/supplier/:id", autenticate, getsupplierById);
supplierRouter.post("/supplier", autenticate, createsupplier);
supplierRouter.put("/supplier/:id", autenticate, updatesupplier);
supplierRouter.delete("/supplier/:id", autenticate, deletesupplier);
supplierRouter.get("/supplier-pdf", autenticate, generatePdf);
supplierRouter.get("/supplier-excel", autenticate, generateExcel);

export default supplierRouter;

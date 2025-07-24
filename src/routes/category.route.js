import { Router } from "express";
import {
  createcategory,
  deletecategory,
  getAllcategory,
  getcategoryById,
  updatecategory,
} from "../controllers/kategory.controller.js";
import { autenticate } from "../controllers/error.controller.js";
const categoryRoute = Router();

categoryRoute.get("/api/category", autenticate, getAllcategory);
categoryRoute.get("/api/category/:id", autenticate, getcategoryById);
categoryRoute.post("/api/category", autenticate, createcategory);
categoryRoute.put("/api/category/:id", autenticate, updatecategory);
categoryRoute.delete("/api/category/:id", autenticate, deletecategory);

export default categoryRoute;

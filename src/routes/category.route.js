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

categoryRoute.get("/category", autenticate, getAllcategory);
categoryRoute.get("/category/:id", autenticate, getcategoryById);
categoryRoute.post("/category", autenticate, createcategory);
categoryRoute.put("/category/:id", autenticate, updatecategory);
categoryRoute.delete("/category/:id", autenticate, deletecategory);

export default categoryRoute;

import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  loginUser,
  setRefreshToken,
  updateUser,
} from "../controllers/user.controller.js";
import { autenticate } from "../controllers/error.controller.js";
const userRouter = Router();

userRouter.post("/user", createUser);
userRouter.put("/user/:id", autenticate, updateUser);
userRouter.post("/user/login", loginUser);
userRouter.delete("/user/:id", autenticate, deleteUser);
userRouter.get("/user", autenticate, getAllUser);
userRouter.get("/user/refresh", setRefreshToken);
userRouter.get("/user/:id", autenticate, getUserById);

export default userRouter;

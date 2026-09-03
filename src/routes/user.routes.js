import { Router } from "express";

export const userRouter = Router();

//rutas
userRouter.post("/users",createUser);
//toda la funcionalidad de la ruta
userRouter.get("/users",getAllUsers);
userRouter.get("/users/:id", getUserDyId);
userRouter.put("/users/:id", updateUser);
userRouter.delete("users/:id", deteleUser);
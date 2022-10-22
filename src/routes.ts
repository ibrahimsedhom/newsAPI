import { Router } from "express";
import UserController from "./controllers/UserController";
const router = Router();

router.post("/user", UserController.newUser);

router.post("/login", UserController.login);

export default router;

import { Router } from "express";
import UserController from "./controllers/UserController";
import newsRoute from "./routes/newsRoute";
import requireAuth from "./controllers/authController";
const router = Router();

router.post("/user", UserController.newUser);

router.post("/login", UserController.login);

router.use("/news", requireAuth, newsRoute);

export default router;

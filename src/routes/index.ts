import { Router } from "@oak/oak";
import { health } from "../controllers/health.controller.ts";

const router = new Router();

router.get("/", health);

export default router;
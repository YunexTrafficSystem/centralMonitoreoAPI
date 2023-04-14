import { Router } from "npm:express";
import lightsController from "../controllers/lights.controller.ts";

const router: Router = Router();

router.get("/lights", lightsController.list);
router.post("/lights", lightsController.create);

export default router;

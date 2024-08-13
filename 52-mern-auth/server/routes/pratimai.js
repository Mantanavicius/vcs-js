import express from "express";
import * as controller from "../controllers/controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
router.use(requireAuth);
//GET - paimti visus pratimus
router.get("/", controller.getWorkouts);

//GET - paimti viena pratima
router.get("/:id", controller.getWorkout);

//POST - sukurti pratima
router.post("/", controller.createWorkout);

//PATCH - atnaujinti pratima
router.patch("/:id", controller.updateWorkout);

//DELETE - istrinti pratima
router.delete("/:id", controller.deleteWorkout);

export default router;

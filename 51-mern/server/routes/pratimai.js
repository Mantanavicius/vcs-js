import express from "express";
import Workout from "../models/pratimoModelis.js";
import * as controller from "../controllers/controller.js";

const router = express.Router();

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

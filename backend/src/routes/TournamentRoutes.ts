import { Router } from "express";
import { TournamentController } from "../controllers/TournamentController";

const router = Router();
const tournamentController = new TournamentController();

router.post("/tournaments", tournamentController.create);
router.get("/tournaments", tournamentController.getAll);

export default router;

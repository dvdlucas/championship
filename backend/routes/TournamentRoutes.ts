import express from "express";

import { index } from "../controllers/TournamentController"

const router = express.Router();
router.get("/", index)

export default router;
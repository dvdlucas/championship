import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tournament } from "../models/Tournament";

export class TournamentController {
  async create(req: Request, res: Response): Promise<Response> {
    const tournamentRepository = getRepository(Tournament);
    const tournament = tournamentRepository.create(req.body);
    await tournamentRepository.save(tournament);
    return res.status(201).json(tournament);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const tournamentRepository = getRepository(Tournament);
    const tournaments = await tournamentRepository.find();
    return res.status(200).json(tournaments);
  }
}

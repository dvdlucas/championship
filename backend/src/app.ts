import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import config from ".././ormconfig";
import tournamentRoutes from "./routes/TournamentRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", tournamentRoutes);

createConnection(config).then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}).catch(error => console.log(error));

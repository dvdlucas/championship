import express from "express";

//router
import tournament from "../routes/TournamentRoutes"
const app = express()


app.use("/", tournament)

app.listen(3000, function(){
    console.log("Servidor rodando")
})
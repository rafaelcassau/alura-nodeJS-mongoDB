import express from "express"
import AutorController from "../controllers/autoresController.js"


const router = express.Router()

router
    .get("/autores/", AutorController.listarAutores)
    .get("/autores/:id", AutorController.obterAutorPorID)
    .post("/autores/", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.deletarAutor)

export default router
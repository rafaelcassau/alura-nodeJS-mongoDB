import autores from "../models/Autor.js";


class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static obterAutorPorID = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autor) => {
            if (err) {
                res.status(500).send({message: `Nao foi possivel encontrar o autor, Erro: ${err.message}`})
            } else {
                if (!autor) {
                    res.status(404).send({message: 'Autor nao encontrado.'})
                } else {
                    res.status(200).send(autor.toJSON())
                }
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err, autor) => {
            if (err) {
                res.status(500).send({message: `Nao foi possivel atualizar o autor, Erro: ${err.message}`})
            } else {
                if (!autor) {
                    res.status(404).send({message: "Autor nao encontrado."})
                } else {
                    res.status(200).send({message: "O autor foi atualizado com sucesso."})
                }
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err, autor) => {
            if (err) {
                res.status(500).send({message: `Nao foi possivel deletar o autor, Erro: ${err.message}`})
            } else {
                if (!autor) {
                    res.status(404).send({message: "Autor nao encontrado."})
                } else {
                    res.status(200).send({message: "O autor foi removido com sucesso."})
                }
            }
        })
    }
}

export default AutorController
import livros from "../models/Livro.js";


class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        });
    }

    static obterLivroPorID = (req, res) => {
        const id = req.params.id;
        
        livros.findById(id, (err, livro) => {
            if (!err) {
                if (!livro) {
                    res.status(404).send({message: "Livro nao encontrado."})
                } else {
                    res.status(200).send(livro.toJSON())
                }
            } else {
                res.status(500).send({message: `${err.message} - Id do livro nao localizado.`})
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else (
                res.status(201).send(livro.toJSON())
            )
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso.'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err, livro) => {
            if (!err) {
                if (!livro) {
                    res.status(404).send({message: "Livro nao encontrado."})
                } else {
                    res.status(200).send({message: "O livro foi removido com sucesso."})
                }
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default LivroController
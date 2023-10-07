import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
);

const autores = mongoose.model("autores", authorSchema);

export default autores;
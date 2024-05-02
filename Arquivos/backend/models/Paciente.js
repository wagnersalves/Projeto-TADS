const mongoose = require("mongoose")

const {Schema} = mongoose

const {noiteSchema} = require("./Noite")

const pacienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    noites: {
        type: [noiteSchema],
    }
},
{timestamps: true}
)

const Paciente = mongoose.model("Paciente", pacienteSchema)

module.exports = Paciente
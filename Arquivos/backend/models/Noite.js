//Define as noites que foram registradas através do CPAP, vão se relacionar com os Pacientes
const mongoose = require("mongoose")

//Vai ser a estrutura do model
const {Schema} = mongoose

const noiteSchema = new Schema({
    paciente: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Paciente'
    },    
    data: {
        type: String,
        required: true
    },
    tempo_uso: {
        type: Number,
        required: true
    },
    fugas_hora: {
        type: Number,
        required: true
    },
    pressao_media: {
        type: Number,
        required: true
    },
    apneias_hora: {
        type: Number,
        required: true
    },
    //timestamp salva as datas dos registros
}, 
{timestamps: true}

)

const Noite = mongoose.model("Noite", noiteSchema)

//Exportando para o resto do programa
module.exports = {
    Noite,
    noiteSchema
}

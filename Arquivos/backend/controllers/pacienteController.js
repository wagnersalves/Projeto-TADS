const PacienteModel = require ("../models/Paciente")

const pacienteController = {

    create: async(req, res) => {
        try {
            
            const paciente = {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                idade: req.body.idade,
                noites: [],
            }
            
            const response = await PacienteModel.create(paciente);

            res.status(201).json({response, msg: "Paciente criado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            const pacientes = await PacienteModel.find()

            res.json(pacientes)
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {
        try {
            // id => req URL === GET
            const id = req.params.id
            const pacientes = await PacienteModel.findById(id)

            if (!pacientes) {
                res.status(404).json({msg: "Paciente não encontrado"})
                return;
            }

            res.json(pacientes)

        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const pacientes = await PacienteModel.findById(id)

            if (!pacientes) {
                res.status(404).json({msg: "Paciente não encontrado"})
                return;
            }

            const deletedPaciente = await PacienteModel.findByIdAndDelete(id)

            res.status(200).json({deletedPaciente, msg: "Paciente excluída com sucesso"})

        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {

        const id = req.params.id

        const paciente = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            idade: req.body.idade,
            noites: req.body.noites,
        }

        const updatedPaciente = await PacienteModel.findByIdAndUpdate(id, paciente)

        if (!updatedPaciente) {
            res.status(404).json({msg: "Paciente não encontrado"})
            return;
        }

        res.status(200).json({paciente, msg: "Paciente atualizado com sucesso!"})
    }

}

module.exports = pacienteController


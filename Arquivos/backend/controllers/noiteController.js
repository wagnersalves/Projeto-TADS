const { Noite: NoiteModel, Noite } = require("../models/Noite")

const PacienteModel = require ("../models/Paciente")

const noiteController = {
    create: async (req, res) => {
        try {
            const pacienteid = req.params.pacienteid
            const paciente = await PacienteModel.findById(pacienteid)

            const noite = {
                paciente: paciente,      
                data: req.body.data,
                tempo_uso: req.body.tempo_uso,
                fugas_hora: req.body.fugas_hora,
                pressao_media: req.body.pressao_media,
                apneias_hora: req.body.apneias_hora
            }

//Criação de Noite no BD
            const response = await NoiteModel.create(noite);
            await PacienteModel.updateOne({
                _id:paciente._id
            },
            {
                noites: [...paciente.noites, response]
            }
            )
            res.status(201).json({response, msg: "Noite criada com sucesso!"})


        } catch (error) {

            console.log(error)

        }
    },

    getAll: async(req, res) => {
        try {
            const noites = await NoiteModel.find()

            res.json(noites)
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req, res) => {
        try {
            // id => req URL === GET
            const id = req.params.id
            const noites = await NoiteModel.findById(id)

            if (!noites) {
                res.status(404).json({msg: "Noite não encontrada"})
            }

            res.json(noites)

        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const noites = await NoiteModel.findById(id)

            if (!noites) {
                res.status(404).json({msg: "Noite não encontrada"})
                return;
            }

            const deletedNoite = await NoiteModel.findByIdAndDelete(id)

            res.status(200).json({deletedNoite, msg: "Noite excluída com sucesso"})

        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {

        const id = req.params.id

        const noite = {      
            data: req.body.data,
            tempo_uso: req.body.tempo_uso,
            fugas_hora: req.body.fugas_hora,
            pressao_media: req.body.pressao_media,
            apneias_hora: req.body.apneias_hora
        }

        const updatedNoite = await NoiteModel.findByIdAndUpdate(id, noite)

        if (!updatedNoite) {
            res.status(404).json({msg: "Noite não encontrada"})
            return;
        }

        res.status(200).json({noite, msg: "Noite atualizada com sucesso!"})
    }

}

module.exports = noiteController;
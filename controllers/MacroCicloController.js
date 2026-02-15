const Atletas = require('../shared/models/MacroCiclo');

const CrearMacroCiclo = async (req, res) => {

    try{
        const { Atleta_FK, FechaInicio, FechaFin } = req.body;

        const nuevoMacroCiclo = await Atletas.create({ Atleta_FK, FechaInicio, FechaFin });

        res.status(201).json({
            message: 'Macro ciclo creado exitosamente',
            timestamp: new Date(),
            macroCiclo: nuevoMacroCiclo
        });
    }
    catch(error){
        console.error('Error al crear el macro ciclo:', error);
        res.status(500).json({ error: 'Error al crear el macro ciclo' });
    }
}

const EditarMacroCiclo = async (req, res) => {

    try{
        const { id } = req.params;
        const { Atleta_FK, FechaInicio, FechaFin } = req.body;
        const macroCicloExistente = await Atletas.findByPk(id);

        if (!macroCicloExistente) {
            return res.status(404).json({ error: 'Macro ciclo no encontrado' });
        }

        await macroCicloExistente.update({ Atleta_FK, FechaInicio, FechaFin });

        res.status(200).json({
            message: 'Macro ciclo actualizado exitosamente',
            timestamp: new Date(),
            macroCiclo: macroCicloExistente
        });
    }
    catch(error){
        console.error('Error al actualizar el macro ciclo:', error);
        res.status(500).json({ error: 'Error al actualizar el macro ciclo' });
    }
}

module.exports = {
    CrearMacroCiclo,
    EditarMacroCiclo
}
const Atletas = require('../shared/models/MacroCiclo');

const CrearMacroCiclo = async (req, res) => {

    try{
        // crear la funcion para crear un macro ciclo, se va a recibir el ID del atleta al que se le va a asignar el macro ciclo
    }
    catch(error){
        console.error('Error al crear el macro ciclo:', error);
        res.status(500).json({ error: 'Error al crear el macro ciclo' });
    }
}

// actualizar el macro ciclo, se va a recibir el ID del macro ciclo que se quiere actualizar y el ID del atleta al que se le va a asignar el macro ciclo

module.exports = {
    CrearMacroCiclo,
}
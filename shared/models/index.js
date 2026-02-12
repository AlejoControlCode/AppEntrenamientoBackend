const {sequelize} = require('../../config/database');
const Atletas = require('./Atletas');
const MacroCiclo = require('./MacroCiclo');



const synCmodels = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados correctamente');
    }
    catch(error){
        console.error('Error al sincronizar los modelos:', error);
    }

}


module.exports = {
    synCmodels,
    Atletas, 
    MacroCiclo
}

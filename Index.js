const express = require('express');
require('dotenv').config();
const {corsMiddleware} = require('./shared/middleware/cors');
const {testConexion} = require('./config/database');
const {synCmodels} = require ('./shared/models/index')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

//Aca se van a escribir las rutas del MVC (Model View Controlller)

app.use('/api/Atletas', require('./routes/AtletasRoutes'))
app.use('/api/MacroCiclo', require('./routes/MacroCicloRoutes'))


//--------------------------------------


const initializeDatabase = async () => {
    await testConexion()
    await synCmodels()

}


const StartServer = async ()=> {

    try {
        await  initializeDatabase()
        app.listen(PORT, () =>{
            console.log( `esta joda esta corriendo en http://localhost:${PORT}` );
        })
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}


StartServer()
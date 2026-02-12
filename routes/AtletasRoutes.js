const Express = require('express');
const {AgregarAtleta} = require('../controllers/AtletasControllers')

const router = Express.Router();

router.post('/RutaAtletas/RegistrarAtleta', AgregarAtleta)






module.exports = router;
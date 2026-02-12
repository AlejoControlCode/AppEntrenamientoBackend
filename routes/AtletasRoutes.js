const Express = require('express');
const {AgregarAtleta, EditarAtletas} = require('../controllers/AtletasControllers')

const router = Express.Router();

router.post('/RutaAtletas/RegistrarAtleta', AgregarAtleta)
router.put('/RutaAtletas/EditarAtleta/:id', EditarAtletas)


module.exports = router;
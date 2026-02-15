const Express = require('express');
const {CrearMacroCiclo, EditarMacroCiclo} = require('../controllers/MacroCicloController')

const router = Express.Router();

router.post('/RutaMacroCiclo/CrearMacroCliclo', CrearMacroCiclo)
router.put('/RutaMacroCiclo/EditarMacroCiclo/:id', EditarMacroCiclo)


module.exports = router;

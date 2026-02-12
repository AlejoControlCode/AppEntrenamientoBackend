const Express = require('express');
const {CrearMacroCiclo} = require('../controllers/MacroCicloController')

const router = Express.Router();

router.post('/RutaMacroCiclo/CrearMacroCliclo', CrearMacroCiclo)


module.exports = router;

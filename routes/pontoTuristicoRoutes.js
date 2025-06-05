const express = require('express');
const router = express.Router();
const controller = require('../controllers/pontoTuristicoController');


router.get('/distrito/:distrito', controller.getByDistrito);
//router.get('/:id/pontos-proximos', controller.getPontosProximos);

router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.post('/', controller.create);
router.get('/', controller.getAll);

module.exports = router;
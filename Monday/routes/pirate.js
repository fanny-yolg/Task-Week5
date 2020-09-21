const { Router } = require('express');
const router = Router();
const PirateController = require('../controllers/Pirate')

router.get('/', PirateController.getPirate);
router.get('/add', PirateController.addFormPirate);
router.post('/add', PirateController.addPirate);
router.get('/delete/:id', PirateController.deletePirate)

module.exports = router;                
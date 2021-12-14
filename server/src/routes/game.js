const router = require('express').Router();
const { getAllDecks, getAllStats, getRound } = require('../controllers/gameController');

router.get('/start', getAllDecks);

router.get('/:id/stats', getAllStats);



module.exports = router;

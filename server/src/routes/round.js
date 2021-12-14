const router = require('express').Router();
const { getUserRounds, addRound } = require('../controllers/roundController');

router.get('/:userid', getUserRounds);

router.post('/add', addRound);

module.exports = router;
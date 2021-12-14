const router = require('express').Router();
const { editUser } = require('../controllers/userController');

router.patch('/:id/edit', editUser);

module.exports = router;
const express = require('express');
const router = express();
const controller = require('../controller/ToDoController');

router.get('/', controller.getList)
router.post('/', controller.add)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete);

module.exports = router;
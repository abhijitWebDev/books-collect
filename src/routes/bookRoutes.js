const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();
const bookController = new BookController();

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
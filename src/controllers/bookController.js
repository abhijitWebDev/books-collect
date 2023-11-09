const Book = require('../models/bookModel');

class BookController {
  // for fetching all the books
  async getBooks(req, res) {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // fetching a single book

  async getBook(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (book == null) {
        return res.status(404).json({ message: 'Cannot find book' });
      }
      res.json(book);
    } catch (err) {
      return res.status(500).json({ message: "Not valid parameter" });
    }
  }

  // for creating book 

  async createBook(req, res) {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    });
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: "No books are present" });
    }
  }
// for updation of the the book
  async updateBook(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (book == null) {
        return res.status(404).json({ message: 'Cannot find book' });
      }
      if (req.body.title != null) {
        book.title = req.body.title;
      }
      if (req.body.author != null) {
        book.author = req.body.author;
      }
      if (req.body.summary != null) {
        book.summary = req.body.summary;
      }
      const updatedBook = await book.save();
      res.json(updatedBook);
    } catch (err) {
      return res.status(500).json({ message: "Cannot update book due to invalid id or id doesnot exist" });
    }
  }
// for deletion of the book
  async deleteBook(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (book == null) {
        return res.status(404).json({ message: 'Cannot find book' });
      }
      await book.remove();
      res.json({ message: 'Deleted Book' });
    } catch (err) {
      return res.status(500).json({ message: "not valid parameter or id" });
    }
  }
}

module.exports = BookController;
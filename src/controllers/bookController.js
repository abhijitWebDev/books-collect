const Book = require('../models/bookModel');

class BookController {
  async getBooks(req, res) {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch books' });
    }
  }

  async getBook(req, res) {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Cannot find book' });
      }
      res.json(book);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to fetch book' });
    }
  }

  async createBook(req, res) {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: 'Failed to create book' });
    }
  }

  async updateBook(req, res) {
    const { id } = req.params;
    const { title, author, summary } = req.body;
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Cannot find book' });
      }
      if (title) book.title = title;
      if (author) book.author = author;
      if (summary) book.summary = summary;
      const updatedBook = await book.save();
      res.json(updatedBook);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to update book' });
    }
  }

  async deleteBook(req, res) {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Cannot find book' });
      }
      await book.remove();
      res.json({ message: 'Deleted Book' });
    } catch (err) {
      return res.status(500).json({ message: 'Failed to delete book' });
    }
  }
}

module.exports = BookController;
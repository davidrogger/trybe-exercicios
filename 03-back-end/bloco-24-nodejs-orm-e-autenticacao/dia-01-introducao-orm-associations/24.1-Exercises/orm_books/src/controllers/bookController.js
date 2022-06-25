const bookService = require('../services/bookService');
const { status } = require('../helpers/');

const bookController = {
  async getAll (_req, res) {
    const books = await bookService.getAll();

    return res.status(status.HTTP_OK).json(books);
  },
  async getById (req, res) {
    const { id } = await bookService.validateId(req.params);
    const book = await bookService.getById(id);

    return res.status(status.HTTP_OK).json(book);
  },
  async create (req, res) {
    const newBook = await bookService.validateBodyCreate(req.body);
    const savedBook = await bookService.create(newBook);
    res.status(status.HTTP_CREATED).json(savedBook);
  },
};

module.exports = bookController;
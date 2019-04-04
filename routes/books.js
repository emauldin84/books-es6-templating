const express = require('express');
const Router = express.Router;


// require controller functions
const {
    getAll,
    getById
} = require('../controllers/books')

// create the router

const booksRoutes = Router();

// GET

booksRoutes.get('/', getAll);
booksRoutes.get('/:id', getById);

module.exports = booksRoutes;
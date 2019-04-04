const express = require('express');
const Router = express.Router;


// require controller functions
const {
    getAll
} = require('../controllers/books')

// create the router

const booksRoutes = Router();

// GET

booksRoutes.get('/', getAll);

module.exports = booksRoutes;
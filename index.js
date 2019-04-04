const express = require('express'); // bring in the express library
const es6Renderer = require('express-es6-template-engine'); // require express es6 template engine
const app = express();
const port = 3000;

app.engine('html', es6Renderer); // introduce html to es6 renderer
app.set('view engine', 'html'); // tell express to use as its 'view engine' the thing that speaks html
app.set('views', 'views'); // tell express where to find the view files. (the second argument is the name of the directory where my template files will live)

// require routers from ./routes/books
const booksRouter = require('./routes/books');


// connect to the router
app.use('/books', booksRouter);





app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
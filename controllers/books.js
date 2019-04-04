// retrieve (GET)
function getAll(req, res) {
    res.render('books', {
        locals: {
            welcome: 'Welcome to myBooks!'
        }
    })
}

module.exports = {
    getAll
}
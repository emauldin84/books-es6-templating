
// retrieve (GET)
function getAll(req, res) {
    res.render('books', {
        locals: {
            welcome: 'Welcome to myBooks!'
        }
    })
}

function getById(req, res) {
    res.render('books-id', {
        locals: {
            welcomeID: `Welcome to myBooks, user: ${req.params.id}`
        }
    })
}

module.exports = {
    getAll,
    getById,
}
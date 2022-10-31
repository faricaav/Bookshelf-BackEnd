const addBookHandler = require('./handler/AddBookHandler');
const getAllBooksHandler = require('./handler/GetAllBooksHandler');
const getBookDetailHandler = require('./handler/GetBookDetailHandler');
const editBookByIdHandler = require('./handler/EditBookByIdHandler');
const deleteBookByIdHandler = require('./handler/DeleteBookByIdHandler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookDetailHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
]

module.exports = routes
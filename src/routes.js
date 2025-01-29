const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookById } = require("./handler");

const routes = [
    {
        // route untuk menambahkan buku
        method: 'POST',
        path: '/books',
        handler: addBookHandler
    },
    {
        // route menampilkan seluruh buku
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        // route untuk menampilkan detail buku berdasarkan id 
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler
    },
    {
        // route untuk edit data buku berdasarkan id
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler
    },
    {
        // route untuk menghapus buku berdasarkan id
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookById
    }
];

module.exports = routes ;
const loadingBooks = () => ({
    type: 'LOADING_BOOKS',
});

const getBooks = (allBooks) => ({
    type: 'GET_ALL_BOOKS',
    payload: allBooks
});

const getError = (error) => ({
    type: 'GET_ERROR',
    payload: error
});
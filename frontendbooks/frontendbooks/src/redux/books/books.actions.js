export const loadingBooks = () => ({
    type: 'LOADING_BOOKS',
});

export const getBooks = (allBooks) => ({
    type: 'GET_ALL_BOOKS',
    payload: allBooks
});

export const getError = (error) => ({
    type: 'GET_ERROR',
    payload: error
});
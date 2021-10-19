import { createSelector } from 'reselect'

const getBooks = state => state.books

export const hello = createSelector(
    [getBooks],
    getBooks => getBooks.hello
)

export const books = createSelector(
    [getBooks],
    getBooks => getBooks.books
)

export const error = createSelector(
    [getBooks],
    getBooks => getBooks.error
)
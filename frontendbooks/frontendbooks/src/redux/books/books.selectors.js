import { createSelector } from 'react'

const getBooks = state = state.books

export const books = createSelector(
    [getBooks],
    getBooks => getBooks.books
)
import { createSelector } from 'reselect'

const getBooks = state => state.books

export const hello = createSelector(
    [getBooks],
    getBooks => getBooks.hello
)
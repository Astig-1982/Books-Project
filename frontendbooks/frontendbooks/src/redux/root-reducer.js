import { combineReducers } from 'redux';
import booksReducer from './books/books.reducer';
import mainFilterReducer from './mainfilter/mainfilter.reducer';

export default combineReducers({
    books: booksReducer,
    mainFilter: mainFilterReducer
});
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import BooksPage from './pages/bookspage/bookspage.component';
import BookDetailed from './components/bookdetailed/bookdetailed.component';




function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/all-books/:order_by' component={ BooksPage } />
      <Route exact path='/all-books/book-detailed/:book_id' component={ BookDetailed } />
    </div>
  );
}

export default App;

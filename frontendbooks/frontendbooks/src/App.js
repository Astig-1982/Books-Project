import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import BooksPage from './pages/bookspage/bookspage.component';
import BookDetailed from './components/bookdetailed/bookdetailed.component';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact={false} path='/all-books/:order_by' component={ BooksPage } />
        <Route exact path='/all-books/book-detailed/:book_id' component={ BookDetailed } />
      </Switch>
    </div>
  );
}

export default App;

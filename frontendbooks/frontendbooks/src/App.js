import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import BooksPage from './pages/bookspage/bookspage.component';
import BookDetailed from './components/bookdetailed/bookdetailed.component';
import Header from './components/header/header.component';




function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/all-books/:filter_method' component={ BooksPage } />
        <Route path='/all-books/book-detailed/:book_id' component={ BookDetailed } />
      </Switch>
    </div>
  );
}

export default App;

import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import BooksPage from './pages/bookspage/bookspage.component';




function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/all-books' component={ BooksPage } />
    </div>
  );
}

export default App;

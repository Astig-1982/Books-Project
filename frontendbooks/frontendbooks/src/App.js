import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import BooksPage from './pages/bookspage/homepage.component';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ BooksPage } />
    </div>
  );
}

export default App;

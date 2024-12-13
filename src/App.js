import {useState, useEffect, useContext} from 'react'
import BooksCreate from './component/BooksCreate';
import BookList from './component/BookList';
import BooksContext from './context/Book';

function App() {

  const {fetchBooks} = useContext(BooksContext)

  useEffect(() => {
    fetchBooks();
  },[])

  return (
    <div>
      <BookList />
      <BooksCreate />
    </div>
  );
}

export default App;

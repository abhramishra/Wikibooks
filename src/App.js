import {useState} from 'react'
import BooksCreate from './component/BooksCreate';
import BookList from './component/BookList';

function App() {
  const [books, setBooks] = useState([])

  const handleCreate = (bookTitle) => {
    const newBook = {
      id: Math.round(Math.random() * 9999),
      title: bookTitle
    }
    setBooks([...books, newBook])
  }

  const handleUpdate = (id, title) => {
    console.log(id, title)
    const updatedRecord = books.map(book => {
      if (book.id === id) {
        return {...book, title: title}
      }
      return book
    })
    setBooks(updatedRecord)
  }

  const handleRemove = (id) => {
    const updatedRecord = books.filter(book => book.id !== id)
    setBooks(updatedRecord)
  }

  return (
    <div>
      <BookList books={books} onEdit={handleUpdate} onDelete={handleRemove} />
      <BooksCreate onCreate={handleCreate}/>
    </div>
  );
}

export default App;

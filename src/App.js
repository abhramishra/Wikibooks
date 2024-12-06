import {useState, useEffect} from 'react'
import BooksCreate from './component/BooksCreate';
import BookList from './component/BookList';
import axios from 'axios';



function App() {
  const [books, setBooks] = useState([])

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/books")
    if (response.data){
      setBooks(response.data)
    }
  }
  useEffect(() => {
    getData();
  },[])

  const handleCreate = async (bookTitle) => {
    const response = await axios.post('http://localhost:3001/books', bookTitle)
    console.log(response)
    setBooks([...books, response.data])
  }

  const handleUpdate = async (id, title) => {
    console.log(id, title)
    const response = await axios.put(`http://localhost:3001/books/${id}`, title) 

    const updatedRecord = books.map(book => {
      if (book.id === response.data.id) {
        // return {...book, title: response.data.title}
        return {...book, ...response.data}
      }
      return book
    })
    setBooks(updatedRecord)
  }

  const handleRemove = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    console.log(response.data)
    const updatedRecord = books.filter(book => book.id !== response.data.id)
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

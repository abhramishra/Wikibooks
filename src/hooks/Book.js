import {useContext} from 'react'
import BooksContext from '../context/Book'

function useBooksContext() {
    return useContext(BooksContext)
}

export default useBooksContext
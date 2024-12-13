import { useState, useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../Context/Books";

function BookList({books, onEdit, onDelete}) {
    const { count, handleCounter } = useContext(BooksContext)
    return (
        <div>
            <h2>Context API Example: {count}</h2>
            <button onClick={handleCounter}>Click +</button>
            <h2>Reading List - {books.length}</h2>
            <div>
            {
                books.map(book => {
                    return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
                })
            }
            </div>
        </div>
    )
}

export default BookList;
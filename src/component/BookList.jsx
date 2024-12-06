import { useState } from "react";
import BookShow from "./BookShow";
function BookList({books, onEdit, onDelete}) {
    return (
        <div>
            <h2>Reading List - {books.length}</h2>
            {
                books.map(book => {
                    return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
                })
            }
        </div>
    )
}

export default BookList;
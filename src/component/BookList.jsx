import { useState } from "react";
import BookShow from "./BookShow";

function BookList({books, onEdit, onDelete}) {
    return (
        <div>
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
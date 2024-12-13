// import { useState, useContext } from "react";
import BookShow from "./BookShow";
// import BooksContext from "../context/Book";

import useBooksContext from "../hooks/Book";

function BookList() {
    const { books} = useBooksContext();
    return (
        <div>
            <h2>Reading List - {books.length}</h2>
            {
                books.map(book => {
                    return <BookShow key={book.id} book={book} />
                })
            }
        </div>
    )
}

export default BookList;
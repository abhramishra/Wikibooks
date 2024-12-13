// import { useState, useContext } from "react";
import BookShow from "./BookShow";
// import BooksContext from "../context/Book";

import useBooksContext from "../hooks/Book";

function BookList() {
    const { books} = useBooksContext();
    return (
        <div>
            <h2>Reading List - {books.length}</h2>
            <div>
            {
                books.map(book => {
                    return <BookShow key={book.id} book={book} />
                })
            }
            </div>
        </div>
    )
}

export default BookList;
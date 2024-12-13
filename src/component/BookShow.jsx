
import {useState} from 'react';
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/Book";

function BookShow({book , onEdit, onDelete}) {
    const {handleUpdate, handleRemove} = useBooksContext()
    const [showEdit, setShowEdit] = useState(false)
    const handleShowUpdateForm = () => {
        setShowEdit(!showEdit)
        // onEdit(book.id, book.title)
    }

    const handleEdit = (id, title) => {
        setShowEdit(false)
        handleUpdate(id, {title})
    }

    const handleDelete = () => {
        handleRemove(book.id)
    }

    let content = book.title
    if (showEdit) {
        content = <BookEdit book={book} handleEdit={handleEdit} />
    }
    return (
        <div>
            <div>{ content }</div>
            <button onClick={handleShowUpdateForm}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BookShow
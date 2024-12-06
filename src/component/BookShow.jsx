
import {useState} from 'react';
import BookEdit from './BookEdit';
function BookShow({book , onEdit, onDelete}) {
    const [showEdit, setShowEdit] = useState(false)
    const handleShowUpdateForm = () => {
        setShowEdit(!showEdit)
        // onEdit(book.id, book.title)
    }

    const handleEdit = (id, title) => {
        setShowEdit(false)
        onEdit(id, {title})
    }

    const handleDelete = () => {
        onDelete(book.id)
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
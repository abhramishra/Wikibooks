
import {useState} from 'react';
import BookEdit from './BookEdit';

const boxStyle = {
    padding: '20px',
    background: '#ebe0e0',
    border: '2px solid #986c6c',
    borderRadius: '10px',
    marginBottom: '10px',
    width: '20%'
}
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
        <div style={boxStyle}>
            <div>{ content }</div>
            <button onClick={handleShowUpdateForm}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BookShow
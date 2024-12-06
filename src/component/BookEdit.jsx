
import { useState } from "react"

function BookEdit({book, handleEdit}) {
    const [title, setTitle] = useState(book.title)
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleEdit(book.id, title)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={handleChange} />
                <input type='submit' value='Update' />
            </form>
        </div>
    )
}

export default BookEdit
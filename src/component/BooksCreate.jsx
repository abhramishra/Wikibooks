import React, {useState, useRef} from 'react';
import useBooksContext from '../hooks/Book';

function BooksCreate() {
    const {handleCreate} = useBooksContext()
    const inputRef = useRef(null)
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreate({"title": title})
        inputRef.current.focus()
    }
    return (
        <div style={{ marginTop: '50px' }}>
            <hr/>
            <h2>Add a Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter book title</label>
                <input type='text' name='title' ref={inputRef} value={title} onChange={handleChange} />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default BooksCreate;
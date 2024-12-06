import React, {useState} from 'react';

function BooksCreate({ onCreate }) {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title)
    }
    return (
        <div style={{ marginTop: '50px' }}>
            <hr/>
            <h2>Add a Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter book title</label>
                <input type='text' name='title' value={title} onChange={handleChange} />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default BooksCreate;
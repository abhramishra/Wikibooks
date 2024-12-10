import {useState, createContext} from 'react'

const BooksContext = createContext()

function Provider({children}) {
    const [count, setCount] = useState(1)
    const valueToShare = {
        count,
        handleCounter: () => {
            console.log("Inside handle count ",count)
            setCount(count + 1)
        }
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider}
export default BooksContext
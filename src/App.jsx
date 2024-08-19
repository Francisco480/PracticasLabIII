import './App.css'
import BookItem from './components/bookItem/BookItem.jsx'
import books from './components/books/Books'


function App() {

  return (
    <>
    <h2>Books Champion App</h2>
    <p>¡Quiero leer libros!</p>
      <BookItem books = {books}/>
    </>
  )
}

export default App
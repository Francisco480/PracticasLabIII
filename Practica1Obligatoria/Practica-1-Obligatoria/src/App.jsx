import './App.css'
import watchList from './components/movies/Movies'
import MoviesTitle from './components/moviesTitle/MoviesTitle'

function App() {

  return (
    <>
      <div>
        <MoviesTitle watchList = {watchList} />
      </div>
    </>
  )
}

export default App

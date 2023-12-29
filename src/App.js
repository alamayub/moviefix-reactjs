import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchGenreList } from './store/storeActions'
import GenreList from './components/GenreList'
import MovieCard from './components/MovieCard'
const App = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading);
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    fetchGenreList(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : <main>
        <GenreList />
        <div className="movies__list">
          {movies && movies.lenght > 0 ? movies.map(movie => <MovieCard key={movie['id']} movie={movie} />) : <p>No movies found</p>}
        </div>
      </main>}
    </div>
  );
}

export default App

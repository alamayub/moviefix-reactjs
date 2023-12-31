import { connect } from 'react-redux'
import { fetchAllMovieListAPI } from '../api/index'
import { setMoviesList } from '../store/storeActions'
import MovieCard from './MovieCard'
import { useEffect } from 'react'

const MoviesList = ({ search, year, movies, setMoviesList }) => {

    const fetchAllMovies = async () => {
        await fetchAllMovieListAPI(year, search).then(res => setMoviesList(res));
    }

    useEffect(() => {
        fetchAllMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, search]);

    return (
        <div className="movies__list">
            {movies && movies.length > 0 ? movies.map(movie => <MovieCard key={movie['id']} movie={movie} />) : <p>No movies found</p>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    year: state.year,
    search: state.search,
    movies: state.seletedGenre != null ? state.movies.filter(x => x['genre_ids'].includes(state.seletedGenre['id'])) : state.movies,
    selected: state.seletedGenre,
})

const mapDispatchToProps = (dispatch) => ({
    setMoviesList: lists => dispatch(setMoviesList(lists))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
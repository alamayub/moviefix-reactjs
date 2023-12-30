import { fetchGenreListAPI } from '../api/index'
import { setGenresList, setSelectGenre } from '../store/storeActions'
import { connect } from 'react-redux'
import GenreCard from './GenreCard';
import { useEffect } from 'react';

const GenreList = ({ genres, selected, setSelectGenre, setGenresList }) => {

    useEffect(() => {
        fetchGenreListAPI().then(res => setGenresList(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="genre__lists">
            {genres && genres.length > 0 ? genres.map(genre => <GenreCard
                key={genre['id']}
                genre={genre}
                selected={selected}
                setSelectGenre={() => setSelectGenre(genre)}
            />) : <p>No genre found</p>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    genres: state.genres,
    selected: state.seletedGenre,
})

const mapDispatchToProps = (dispatch) => ({
    setSelectGenre: genre => dispatch(setSelectGenre(genre)),
    setGenresList: lists => dispatch(setGenresList(lists))
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreList)
import { useSelector } from 'react-redux'
import GenreCard from './GenreCard';

const GenreList = () => {
    const lists = useSelector(state => state.genres);

    return (
        <div className="genre__lists">
            {lists && lists.length > 0 ? lists.map(genre => <GenreCard
                key={genre['id']}
                genre={genre}
            />) : <p>No genre found</p>}
        </div>
    );
}

export default GenreList;
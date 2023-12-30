import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MiniGenreList = ({ ids }) => {
    const genresList = useSelector(state => state.genres);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        let x = [];
        for (let id in ids) {
            let res = genresList.find(x => x.id === id.id);
            x.push(res);
        }
        setGenres(x);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="mini__genre__list">
            {genres && genres.length > 0 ? genres.map(x =>
                <div key={x.id}
                    className="mini__genre__card">
                    {x['name']}
                </div>)
                : <div></div>
            }
        </div>
    );
}

export default MiniGenreList;
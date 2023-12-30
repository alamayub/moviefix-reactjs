import { useEffect, useState } from "react";
import { connect } from "react-redux";

const MiniGenreList = ({ ids, genresList }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        let x = [];
        for (let i = 0; i < ids.length; i++) {
            let res = genresList.find(x => x.id === ids[i]);
            x.push(res);
        }
        setGenres(x);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="mini__genre__list">
            {genres && genres.length > 0 ? genres.map(g =>
                <div key={g.id}
                    className="mini__genre__card">
                    {g !== null ? g['name'] : ''}
                </div>)
                : <div></div>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    genresList: state.genres,
})

export default connect(mapStateToProps)(MiniGenreList)
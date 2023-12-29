const MovieCard = ({ movie }) => {
    return (
        <div className="movie__card" style={{ backgroundImage: `url("${process.env.REACT_APP_IMAGE_URL}${movie['poster_path']}")` }}>
            <div className="movie__card__content">
                <h6>{movie['title']}</h6>
                <p className="paragraph">- {movie['overview']}</p>
                <p>
                    <span className="fa fa-star "></span>
                    {movie['vote_average']}({movie['vote_count']})
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
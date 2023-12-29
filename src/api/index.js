// fetch genres list
export const fetchGenreListAPI = async () => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GENRE_LIST}?api_key=${process.env.REACT_APP_API_KEY}`;
        const res = await fetch(url)
        const json = await res.json()
        return json['genres']
    } catch (e) {
        return console.error(e)
    }
}

// fetch all movie list
export const fetchAllMovieListAPI = async () => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100`;
        const res = await fetch(url)
        const json = await res.json()
        return json['results']
    } catch (e) {
        return console.error(e)
    }
}


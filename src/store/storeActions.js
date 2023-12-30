import {
    SET_LOADING,
    SET_GENRES_LIST,
    SET_MOVIES_LIST,
    SET_SELECT_GENRE,
    SET_YEAR,
    SET_SEARCH,
} from './store-actions-contants'

export const setLoading = (loading) => {
    return {
        type: SET_LOADING,
        loading: loading,
    }
}

// set genre list
export const setGenresList = (genres) => {
    return {
        type: SET_GENRES_LIST,
        genres: genres,
    }
}
// set genre list
export const setMoviesList = (movies) => {
    return {
        type: SET_MOVIES_LIST,
        movies: movies,
    }
}
// set selected genre
export const setSelectGenre = (genre) => {
    return {
        type: SET_SELECT_GENRE,
        genre: genre,
    }
}

// set year
export const setYear = (year) => {
    console.log('year ', year)
    return {
        type: SET_YEAR,
        year: year,
    }
}

// set search
export const setSearch = (search) => {
    console.log(search)
    return {
        type: SET_SEARCH,
        search: search,
    }
}

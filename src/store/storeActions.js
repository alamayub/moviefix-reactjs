import {
    SET_LOADING,
    SET_GENRES_LIST,
    SET_MOVIES_LIST,
    SET_SELECT_GENRE,
} from './store-actions-contants'

import { fetchGenreListAPI, fetchAllMovieListAPI } from '../api/index'

// fetch genres & movies list
export const fetchGenreList = async (dispatch) => {
     fetchGenreListAPI().then(res => {
        dispatch(setGenresList(res))
    });
    await fetchAllMovieListAPI().then(res => {
        dispatch(setMoviesList(res));
    });
    dispatch(setLoading(false))
}

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

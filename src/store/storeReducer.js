import {
    SET_LOADING,
    SET_GENRES_LIST,
    SET_MOVIES_LIST,
    SET_SELECT_GENRE,
} from './store-actions-contants'

let initState = {
    loading: true,
    genres: [],
    movies: [],
    seletedGenre: null,
}
const storeReducer = (state = initState, action) => {
    if (action.type === SET_LOADING) {
        return {
            ...state,
            loading: action.loading,
        }
    }
    if (action.type === SET_GENRES_LIST) {
        return {
            ...state,
            genres: action.genres
        }
    }
    if (action.type === SET_MOVIES_LIST) {
        console.log(action.movies)
        return {
            ...state,
            movies: action.movies
        }
    }
    if (action.type === SET_SELECT_GENRE) {
        console.log('SELECTED ', state.seletedGenre, action.genre)
        if (state.seletedGenre != null) {
            if (state.seletedGenre['id'] === action.genre['id']) {
                return {
                    ...state,
                    seletedGenre: null
                }
            } else {
                return {
                    ...state,
                    seletedGenre: action.genre
                }
            }
        } else {
            return {
                ...state,
                seletedGenre: action.genre
            }
        }

    } else {
        return state
    }
}

export default storeReducer
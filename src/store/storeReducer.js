import {
    SET_LOADING,
    SET_GENRES_LIST,
    SET_MOVIES_LIST,
    SET_SELECT_GENRE,
    SET_YEAR,
    SET_SEARCH,
} from './store-actions-contants'

let initState = {
    loading: false,
    genres: [],
    movies: [],
    seletedGenre: null,
    year: 2012,
    search: null,
}
const storeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case SET_GENRES_LIST:
            return {
                ...state,
                genres: action.genres
            }
        case SET_MOVIES_LIST:
            return {
                ...state,
                movies: action.movies
            }
        case SET_SELECT_GENRE:
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
        case SET_YEAR:
            return {
                ...state,
                year: action.year,
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.search,
            }
        default:
            return state
    }
}

export default storeReducer
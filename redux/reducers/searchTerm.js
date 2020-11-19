import {
    GET_SEARCH_TERM
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case GET_SEARCH_TERM: return { ...state, ...action.payload }
            break

        default: return { ...state }
    }
}
export default reducer
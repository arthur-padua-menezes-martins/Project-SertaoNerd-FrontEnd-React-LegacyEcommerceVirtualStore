import {
    GET_SUB_HEADERS
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case GET_SUB_HEADERS: return { ...state, ...action.payload }
            break

        default: return { ...state }
    }
}
export default reducer
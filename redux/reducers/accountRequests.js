import {
    GET_REQUESTS,
    GET_REQUEST,
    CLEAN_REQUEST,
    CANCEL_REQUEST
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case GET_REQUESTS:
            return { ...state, ...action.payload }
            break

        case GET_REQUEST: 
            return { ...state, ...action.payload }
            break

        case CLEAN_REQUEST:
            return {}
            break

        case CANCEL_REQUEST:
            return {}
            break

        default: return { ...state }

    }
}
export default reducer
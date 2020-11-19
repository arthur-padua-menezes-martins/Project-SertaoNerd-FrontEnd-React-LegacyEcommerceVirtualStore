import {
    LOGIN, VERIFY_AUTHENTICATION
} from '../types.js'

const reducer = (state = { authentication: { authenticated: null } }, action) => {
    switch (action.type) {

        case LOGIN: return { ...state, ...action.payload }
            break

        case VERIFY_AUTHENTICATION: return { ...state, ...action.payload }
            break

        default: return state

    }
}
export default reducer
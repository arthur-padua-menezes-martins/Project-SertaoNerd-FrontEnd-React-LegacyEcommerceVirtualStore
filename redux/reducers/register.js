import {
    REGISTER
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case REGISTER: return { ...state, ...action.payload }
            break

        default: return state

    }
}
export default reducer
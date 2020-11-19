import {
    GET_PRODUCT_BY_REFERENCE
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case GET_PRODUCT_BY_REFERENCE: return { ...state, ...action.payload }
            break

        default: return { ...state }
    }
}
export default reducer
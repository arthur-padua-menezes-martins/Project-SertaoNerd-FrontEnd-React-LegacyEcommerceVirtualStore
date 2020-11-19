import {
    GET_PRODUCTS_OF_THE_CATEGORIES_DEFAULT
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case GET_PRODUCTS_OF_THE_CATEGORIES_DEFAULT: return { ...state, ...action.payload }
            break

        default: return { ...state }
    }
}
export default reducer
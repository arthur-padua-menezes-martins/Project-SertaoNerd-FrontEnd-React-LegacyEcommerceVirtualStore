import {
    GET_HOME_PAGE_PRODUCTS
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (action.type) {

        case GET_HOME_PAGE_PRODUCTS: return { ...state, ...action.payload }
            break

        default: return { ...state }
    }
}
export default reducer
import {
    SET_CART,
    GET_CART_PRODUCT, GET_CART_VARIATION, GET_CART_FRETE,
    UPDATE_CART_QUANTITY, UPDATE_CART_FRETE,
    REMOVE_CART_PRODUCT, CLEAN_CART_FRETE, CLEAN_CART
} from '../types.js'

const reducer = (state = { cart: null }, action) => {
    switch (action.type) {

        case SET_CART: return { ...state, cart: action.cart }
            break


        case GET_CART_PRODUCT:
            if (!action.payload.products)
                return state
            else

                return {
                    ...state, cart: state.cart ? state.cart.map((item, index) => (
                        action.itemIndex == index ? { ...item, products: action.payload.products } : item
                    )) : []
                }
            break


        case GET_CART_VARIATION:
            if (!action.payload.variations)
                return state
            else
                return {
                    ...state, cart: state.cart ? state.cart.map((item, index) => (
                        action.itemIndex == index ? { ...item, variations: action.payload.variations } : item
                    )) : []
                }
            break


        case GET_CART_FRETE:
            return { ...state, frete: action.payload, selectedFrete: action.payload[0], cep: action.cep }
            break


        case UPDATE_CART_QUANTITY:

            return { 
                ...state, cart: state.cart ? state.cart.map((item, index) => (
                    action.itemIndex == index ? { ...item, quantity: Number(item.quantity) + Number(action.change), user_id: item.user_id } : item
                )) : []
            }

            break


        case UPDATE_CART_FRETE: return { ...state, selectedFrete: action.selectedFrete }
            break


        case REMOVE_CART_PRODUCT:
            return {
                ...state, cart: state.cart.reduce((acumulator, item, index) =>
                    index !== action.itemIndex ? acumulator.concat(item) : acumulator, []
                )
            }
            break


        case CLEAN_CART_FRETE: return { ...state, frete: null, selectedFrete: null, cep: null }
            break


        case CLEAN_CART: return { ...state, cart: null, selectedFrete: null, frete: null, cep: null }
            break

        default: return { ...state }
    }
}
export default reducer
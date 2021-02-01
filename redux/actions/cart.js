/* basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import axios from 'axios'
import config from '../../config.js'

/* helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { getCart, removeCart, cleanCart } from '../../helpers/cart.js'

/* types************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
  SET_CART,
  GET_CART_PRODUCT, GET_CART_VARIATION, GET_CART_FRETE,
  UPDATE_CART_QUANTITY, UPDATE_CART_FRETE,
  REMOVE_CART_PRODUCT, CLEAN_CART_FRETE, CLEAN_CART
} from '../types.js'
axios.defaults.withCredentials = true

/* return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
export const

  setThisCart = (user_id) => ({ type: SET_CART, cart: getCart(user_id) })

const getCartProduct = (reference, itemIndex) => dispatch => {
  return axios.get(`${config.api}/search/products/${reference}`).then(response =>

    dispatch({ type: GET_CART_PRODUCT, payload: response.data, itemIndex })

  ).catch(error => console.error(error))
}

const getCartVariations = (reference, product, itemIndex) => dispatch => (
  axios.get(`${config.api}/search/variations/${reference}?product=${product}`).then(response =>

    dispatch({ type: GET_CART_VARIATION, payload: response.data, itemIndex })

  ).catch(error => console.error(error))
)

const calculateShipping = (cep, cart) => async dispatch => {
  axios.post(`${config.api}/account/deliveries/calculate`, { Cep: cep, Cart: cart.cart }).then(response =>

    dispatch({ type: GET_CART_FRETE, payload: response.data, cep })

  )
}

const updateCartQuantity = (change, index, user_id) => ({
  type: UPDATE_CART_QUANTITY, change, itemIndex: index
})

const updateCartFrete = (selectedFrete) => ({
  type: UPDATE_CART_FRETE, selectedFrete
})

const removeCartProduct = (index, user_id) => {
  removeCart(index, user_id)
  return { type: REMOVE_CART_PRODUCT, itemIndex: index }
}

const cleanFrete = () => ({
  type: CLEAN_CART_FRETE
})

export const cleanThisCart = () => {
  cleanCart()
  return { type: CLEAN_CART }
}

export default {

  setThisCart,
  getCartProduct,
  getCartVariations,
  calculateShipping,
  updateCartQuantity,
  updateCartFrete,
  removeCartProduct,
  cleanFrete,
  cleanThisCart

}

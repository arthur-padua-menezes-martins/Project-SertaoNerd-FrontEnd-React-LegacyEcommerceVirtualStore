/* basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import axios from 'axios'
import config from '../../config.js'

/* types************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
  CHECKOUT_SET_FORM,
  CHECKOUT_CLEAN_FORM,
  CHECKOUT_SET_PAYMENT_METHOD,
  CHECKOUT_GET_SESSIONID,
  CHECKOUT_SENDERHASH,
  CHECKOUT_CREATE_REQUESTS,
  CHECKOUT_PAY_REQUESTS
} from '../types.js'

/* helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { getCart } from '../../helpers/cart.js'
import { cleanThisCart } from './cart.js'
axios.defaults.withCredentials = true

export const

  checkoutSetForm = (payload, prefix) => dispatch => {
    dispatch({ type: CHECKOUT_SET_FORM, payload, prefix })

    return Promise.resolve()
  }

const checkoutCleanForm = () => ({ type: CHECKOUT_CLEAN_FORM })

const checkoutSetPaymentMethod = (paymentMethod) => ({
  type: CHECKOUT_SET_PAYMENT_METHOD, paymentMethod
})

const checkoutGetPaymentSession = () => dispatch => {
  axios.get(`${config.api}/payments/session`).then((response) => {
    let senderHash

    dispatch({ type: CHECKOUT_GET_SESSIONID, payload: response.data })

    PagSeguroDirectPayment.setSessionId(response.data.sessionId)
    senderHash = PagSeguroDirectPayment.getSenderHash()

    PagSeguroDirectPayment.onSenderHashReady((response) => {
      if (response.status === 'success') { }
    })

    dispatch({ type: CHECKOUT_SENDERHASH, senderHash })
  }).catch((error) => console.error(error))
}

const checkoutPayOrder = (id, senderHash) => dispatch => {
  axios.post(`${config.api}/payments/pay/${id}`, { senderHash }).then(response => {
    dispatch({ type: CHECKOUT_PAY_REQUESTS, payload: response.data })
    dispatch(cleanThisCart())
    dispatch(checkoutCleanForm())
    window.location.href = '/success'
  })
}

const checkoutSendNewRequest = (user_id, cart, totalValue, checkoutForm, selectedFrete, paymentMethod, senderHash, callback) => dispatch => {
  axios.post(`${config.api}/account/requests/create`, {

    Cart: cart,

    Deliveries: {
      type: String(selectedFrete.Codigo),
      value: selectedFrete.Valor.replace(',', '.'),
      deadline: selectedFrete.prazoEntrega,
      address: {
        street: checkoutForm.street,
        number: checkoutForm.number,
        district: checkoutForm.district,
        city: checkoutForm.city,
        state: checkoutForm.state,
        cep: checkoutForm.cep
      }
    },

    Payments: {
      paymentMethod,
      value: paymentMethod === 'creditCard' ? checkoutForm.installments.totalAmount : Number(totalValue),
      installment: paymentMethod === 'creditCard' ? checkoutForm.installments.quantity : 1,
      address: {
        street: !checkoutForm.deliveryAddressBillingAddress ? checkoutForm.billingData.street : checkoutForm.street,
        number: !checkoutForm.deliveryAddressBillingAddress ? checkoutForm.billingData.number : checkoutForm.number,
        district: !checkoutForm.deliveryAddressBillingAddress ? checkoutForm.billingData.district : checkoutForm.district,
        city: !checkoutForm.deliveryAddressBillingAddress ? checkoutForm.billingData.city : checkoutForm.city,
        state: !checkoutForm.deliveryAddressBillingAddress ? checkoutForm.billingData.state : checkoutForm.state,
        cep: !checkoutForm.deliveryAddressBillingAddress ? checkoutForm.billingData.cep : checkoutForm.cep
      },
      card: paymentMethod === 'creditCard' ? {
        name: checkoutForm.name.trim(),
        cpf: checkoutForm.cpf,
        areaCode: checkoutForm.phone.slice(0, 2),
        phone: checkoutForm.phone.slice(2).trim(),
        dataDeNascimento: checkoutForm.dateOfBirth,
        token: checkoutForm.cardToken
      } : undefined
    },

    deliveryAddressBillingAddress: checkoutForm.deliveryAddressBillingAddress

  }).then(response => {
    dispatch({ type: CHECKOUT_CREATE_REQUESTS, payload: response.data })
    dispatch(
      checkoutPayOrder(response.data.Requests.Payments._id, senderHash)
    )
    callback(null)
  }).catch(error => callback(() => console.log(error)))
}

const checkoutWhatsappSendNewRequest = (cart, totalValue, checkoutForm, paymentMethod, callback) => async dispatch => {
  var newRequestId

  await axios.post(`${config.api}/account/requests/create`, {
    Whatsapp: true,

    Cart: cart,

    Deliveries: {
      address: {
        street: checkoutForm.street,
        number: checkoutForm.number,
        district: checkoutForm.district,
        city: checkoutForm.city,
        state: checkoutForm.state,
        cep: checkoutForm.cep
      }
    },

    Payments: {
      paymentMethod,
      value: Number(totalValue),
      installment: 1,
      address: {
        street: checkoutForm.street,
        number: checkoutForm.number,
        district: checkoutForm.district,
        city: checkoutForm.city,
        state: checkoutForm.state,
        cep: checkoutForm.cep
      }
    }
  }).then(response => {
    newRequestId = response.data.Requests._doc._id
  })

  return Promise.resolve(newRequestId)
}

export default {
  checkoutSetForm,
  checkoutSetPaymentMethod,
  checkoutGetPaymentSession,
  checkoutSendNewRequest,
  checkoutWhatsappSendNewRequest,
  checkoutPayOrder
}

import {
    CHECKOUT_SET_FORM,
    CHECKOUT_CLEAN_FORM,
    CHECKOUT_SET_PAYMENT_METHOD,
    CHECKOUT_GET_SESSIONID,
    CHECKOUT_SENDERHASH,
    CHECKOUT_CREATE_REQUESTS,
    CHECKOUT_PAY_REQUESTS
} from '../types.js'


let initialState = {

    form: {
        billingData: {

        }
    },
    paymentMethod: 'creditCard'

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case CHECKOUT_SET_FORM:

            let form = { ...state.form }

            Object.keys(action.payload).forEach((item) => {
                if (action.prefix) {
                    form[action.prefix][item] = action.payload[item]
                }
                else {
                    form[item] = action.payload[item]
                }
            })

            return { ...state, form }
            break

        default: return state


        case CHECKOUT_CLEAN_FORM:
            return { ...state, ...initialState }
            break


        case CHECKOUT_SET_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.paymentMethod
            }
            break


        case CHECKOUT_GET_SESSIONID:
            return {
                ...state,
                sessionId: action.payload.sessionId
            }
            break


        case CHECKOUT_SENDERHASH:
            return {
                ...state,
                sanderHash: action.sanderHash
            }
            break


        case CHECKOUT_CREATE_REQUESTS:
            console.log(action.payload)
            return { ...state, newRequest: action.payload.Requests.newRequests}
        break


        case CHECKOUT_PAY_REQUESTS:
            console.log(action.payload)
            return { ...state, newPayment: action.payload.Requests.newPayment}
        break
    
    
    }

}


export default reducer
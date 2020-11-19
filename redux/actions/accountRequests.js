/* basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import axios from 'axios'
import config from '../../config.js'

/* types************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
  GET_REQUESTS,
  GET_REQUEST,
  CLEAN_REQUEST,
  CANCEL_REQUEST
} from '../types.js'
axios.defaults.withCredentials = true

/* return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
export const

  accountGetRequests = () => dispatch => {
    axios.get(`${config.api}/account/requests/view`).then(response => {
      dispatch({ type: GET_REQUESTS, payload: response.data })
    }).catch(error => console.error(error))
  }

const accountGetRequest = ({ request_id }) => dispatch => {
  axios.get(`${config.api}/account/requests/view/${request_id}`).then(response => {
    dispatch({ type: GET_REQUEST, payload: response.data })
  }).catch(error => console.error(error))
}

const accountCancelRequest = ({ request_id }) => dispatch => {
  axios.post(`${config.api}/account/requests/remove/${request_id}`).then(response =>

    dispatch({ type: CANCEL_REQUEST, payload: response.data })

  ).catch(error => console.error(error))
}

const accountCleanRequest = () => ({ type: CLEAN_REQUEST })

export default {
  accountGetRequests,
  accountGetRequest,
  accountCancelRequest,
  accountCleanRequest
}

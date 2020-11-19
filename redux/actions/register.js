/* basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import axios from 'axios'
import config from '../../config.js'

/* types************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { REGISTER } from '../types.js'
axios.defaults.withCredentials = true

/* return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
export default {

  sendRegisterCredentials: (email, password) => async dispatch => {
    await axios.post(`${config.api}/register`, { email, password }).then(response =>

      dispatch({ type: REGISTER, payload: response.data })

    ).catch(error => console.error(error))
  }

}
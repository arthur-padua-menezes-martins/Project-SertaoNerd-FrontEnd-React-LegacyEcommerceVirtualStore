import {
    WHATSAPP_VERSION
} from '../types.js'

const reducer = (state = {}, action) => {
    switch (WHATSAPP_VERSION) {

        case WHATSAPP_VERSION: return { ...state, whatsappVersion: true }
            break

        default: return { ...state }
    }
}
export default reducer


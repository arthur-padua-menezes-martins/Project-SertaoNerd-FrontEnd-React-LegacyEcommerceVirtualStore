/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*redux*******************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import CartPageDesktop from './desktop.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function CartPage() {
    return (
        <CartPageDesktop />
    )
}

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart.cart, ownProps
})
export default connect(mapStateToProps, actions)(CartPage)
/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'

/*redux*******************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import ButtonAmountProduct from '../../Button/Amount/product.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledContainerCartTable,
    StyledContainerTable, StyledContainerTableBody,
    StyledContainerTableRow, StyledContainerTableData
} from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { addCart } from '../../../helpers/cart.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function CartTable(props) {

    /*props************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var [mobileLayout, setMobileLayout] = useState(window.innerWidth < props.mobileLayout)

    if (window.innerWidth < props.mobileLayout !== mobileLayout) {
        setMobileLayout(window.innerWidth < props.mobileLayout)
    }




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <StyledContainerCartTable>

            <StyledContainerTable productsLenght={props.cart.length}>

                <StyledContainerTableBody productsLenght={props.cart.length}>
                    {
                        props.cart.map((info, index) => {
                            return (
                                <StyledContainerTableRow key={index}>

                                    {  mobileLayout ?
                                        (<>
                                            <StyledContainerTableRow infoMobile={true}>

                                                <StyledContainerTableData title>
                                                    <div>
                                                        <img src={info.variations.images[0]} />
                                                        <span>{info.variations.title}</span>
                                                    </div>
                                                </StyledContainerTableData>


                                                <StyledContainerTableData variationCode>
                                                    <span>{info.variations.code}</span>
                                                </StyledContainerTableData>
                                                
                                                <StyledContainerTableData trash>
                                                    <i
                                                        onClick={() => removeCartProduct(index)}
                                                        className="fas fa-trash"></i>
                                                </StyledContainerTableData>

                                            </StyledContainerTableRow>

                                            <StyledContainerTableRow priceMobile={true}>

                                                <StyledContainerTableData unitaryValue>
                                                    <span>R$ {info.unitaryValue}</span>
                                                </StyledContainerTableData>


                                                <StyledContainerTableData quantity>
                                                    <ButtonAmountProduct
                                                        onClick={newQuantity => updateCartQuantity(newQuantity, info.quantity, info, index)}
                                                        amount={info.quantity}
                                                        color={'rgba(153,153,153,1)'} border={false}
                                                    />
                                                </StyledContainerTableData>


                                                <StyledContainerTableData value>
                                                    <span>R$ {info.unitaryValue * info.quantity}</span>
                                                </StyledContainerTableData>

                                            </StyledContainerTableRow>
                                        </>) : (<>
                                            <StyledContainerTableData title>
                                                <div>
                                                    <img src={info.variations.images[0]} />
                                                    <span>{info.variations.title}</span>
                                                </div>
                                            </StyledContainerTableData>


                                            <StyledContainerTableData>
                                                <span>{info.variations.code}</span>
                                            </StyledContainerTableData>


                                            <StyledContainerTableData>
                                                <span>R$ {info.unitaryValue}</span>
                                            </StyledContainerTableData>


                                            <StyledContainerTableData>
                                                <ButtonAmountProduct
                                                    onClick={newQuantity => updateCartQuantity(newQuantity, info.quantity, info, index)}
                                                    amount={info.quantity}
                                                    color={'rgba(153,153,153,1)'} border={false}
                                                />
                                            </StyledContainerTableData>


                                            <StyledContainerTableData value>
                                                <span>R$ {info.unitaryValue * info.quantity}</span>
                                            </StyledContainerTableData>


                                            <StyledContainerTableData trash>
                                                <i
                                                    onClick={() => removeCartProduct(index)}
                                                    className="fas fa-trash"></i>
                                            </StyledContainerTableData>
                                        </>)
                                    }

                                </StyledContainerTableRow>
                            )
                        })
                    }
                </StyledContainerTableBody>

            </StyledContainerTable>

        </StyledContainerCartTable>
    )




    /*function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function updateCartQuantity(newQuantity, quantity, info, index) {
        let change = newQuantity - quantity

        if (newQuantity > info.variations.quantityInStock) {
            return alert('quantidade indisponível') // retornar uma função de pop up
        }

        if (change !== 0) {
            addCart({
                products: info.products,
                variations: info.variations,
                quantity: change,
                unitaryValue: info.unitaryValue,
                user_id: props.login.authentication.user_id
            })

            props.updateCartQuantity(change, index, props.login.authentication.user_id)
        }
    }
    function removeCartProduct(index) {
        if (window.confirm('remover produto?')) {
            props.removeCartProduct(index, props.login.authentication.user_id)
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state, cart: state.cart.cart, ownProps
})
export default connect(mapStateToProps, actions)(CartTable)
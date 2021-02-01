/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState, useEffect } from 'react'

/*redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../redux/actions/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledSectionHeaderCart, StyledArticleHeaderCart } from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { getCountItemsCart } from '../../helpers/cart.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
const HeaderCart = props => {

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var [quantityInCart, setQuantityInCart] = useState(0)




    /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    useEffect(() => {
        setQuantityInCart(getCountItemsCart(props.login.authentication.user_id))
    }, [props])




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <>
            {props.Desktop && renderForDesktop()}
        </>
    )




    /*render functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function renderForDesktop() {
        return (
            <StyledSectionHeaderCart>
                { typeof props.login.authentication.authenticated !== 'undefined' ? (
                    <>

                        <StyledArticleHeaderCart onClick={() => window.location.href = props.login.authentication.authenticated ? '/account/perfil' : '/login'} account={true}>

                            {props.login.authentication.authenticated === true ?
                                (<img style={{ paddingRight: '3rem' }} src="/svg/user.svg" />) :
                                (<img src="/svg/lock.svg" />)
                            }

                        </StyledArticleHeaderCart>

                        <StyledArticleHeaderCart onClick={() => window.location.href = props.login.authentication.authenticated ? '/cart' : '/login?authenticated=false'} cart={true}>

                            {props.login.authentication.authenticated ?
                                (<>
                                    <img src="/svg/cart.svg" />
                                    <span>{Number(quantityInCart) > 99 ? '+ 99' : quantityInCart}</span>
                                </>) :
                                (<>
                                    <img src="/svg/cart.svg" />
                                    <span>0</span>

                                </>)
                            }

                        </StyledArticleHeaderCart>

                    </>) : (<>

                        <StyledArticleHeaderCart onClick={() => window.location.href = '/login'} account={true}>

                            <img style={{ paddingRight: '3rem' }} src="/svg/user.svg" />

                        </StyledArticleHeaderCart>

                        <StyledArticleHeaderCart onClick={() => window.location.href = '/login?authenticated=false'}>

                            <img src="/svg/cart.svg" />
                            <span>0</span>

                        </StyledArticleHeaderCart>

                    </>)
                }

            </StyledSectionHeaderCart>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state
})
export default connect(mapStateToProps, actions)(HeaderCart)
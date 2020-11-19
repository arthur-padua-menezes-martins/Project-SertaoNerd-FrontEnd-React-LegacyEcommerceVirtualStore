/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

/*redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import DefaultLabel from '../../Label/Default/index.js'
import AccountTableDefault from '../Table/Default/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledContainerAccountRequest,
    StyledContainerAccountRequestCart
} from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
const AccountRequest = props => {

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var router = useRouter(), { type, cartHeads, detailsDeliveryHeads, paymentHeads, paymentInformations, deliveryStatusHeads, deliveryStatusInformations, paymentStatusHeads, paymentStatusInformations } = props




    /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    useEffect(() => {
        props.accountGetRequest({ request_id: router.query.request })
    }, [])




    if (props.accountRequests.requests) {

        return (

            <StyledContainerAccountRequest>

                <button onClick={() => console.log(props)}>c log props</button>
                <StyledContainerAccountRequestCart>

                    <DefaultLabel label={'detalhes do carrinho'} marginBottom={6} fontSize={2} fontWeight={600} color={'rgb(102,102,102)'}>
                        <AccountTableDefault type={'account_details_cart'} heads={cartHeads} informations={props.accountRequests.requests.cart} />
                    </DefaultLabel>

                    <DefaultLabel label={'detalhes de entrega'} marginBottom={6} fontSize={2} fontWeight={600} color={'rgb(102,102,102)'}>
                        <AccountTableDefault type={'account_details_delivery'} heads={detailsDeliveryHeads} informations={props.accountRequests.requests.payments.address} height={1} />
                    </DefaultLabel>

                    {props.whatsapp.whatsappVersion ? (<>

                        <DefaultLabel label={'detalhes do pagamento'} marginBottom={6} fontSize={2} fontWeight={600} color={'rgb(102,102,102)'}>
                            <AccountTableDefault type={'account_details_payment'} heads={['forma de pagamento selecionada', 'total']} informations={props.accountRequests.requests.payments} height={1} />
                        </DefaultLabel>

                    </>) : (<>

                        <DefaultLabel label={'detalhes do pagamento'} marginBottom={6} fontSize={2} fontWeight={600} color={'rgb(102,102,102)'}>
                            <AccountTableDefault type={'account_details_payment'} heads={['forma de pagamento selecionada', 'frete', 'valor', 'total']} informations={props.accountRequests.requests.payments} height={1} />
                        </DefaultLabel>

                    </>)
                    }

                    <DefaultLabel label={'status da entrega'} marginBottom={6} fontSize={2} fontWeight={600} color={'rgb(102,102,102)'}>
                        <AccountTableDefault type={'account_status_delivery'} heads={['status', 'data da alteração']} informations={props.accountRequests.requests.deliveries} />
                    </DefaultLabel>

                    <DefaultLabel label={'status da entrega'} marginBottom={6} fontSize={2} fontWeight={600} color={'rgb(102,102,102)'}>
                        <AccountTableDefault type={'account_status_payment'} heads={['status', 'data da alteração']} informations={props.accountRequests.requests.deliveries} />
                    </DefaultLabel>

                </StyledContainerAccountRequestCart>


            </StyledContainerAccountRequest>
        )

    } else {
        return (<></>)
    }
}

const mapStateToProps = (state, ownProps) => ({ ...state, ownProps })
export default connect(mapStateToProps, actions)(AccountRequest)
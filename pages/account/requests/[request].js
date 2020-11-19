/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState, useEffect } from 'react'
import { withRouter } from 'next/router'

/*redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index.js'
import getBaseInfo from '../../../helpers/getBaseInfo.js'

/*containers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import Header from '../../../Containers/Header/index.js'
import SubHeader from '../../../Containers/SubHeader/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import Layout from '../../../Components/Layout/index.js'
import LayoutAccount from '../../../Components/Layout/account.js'
import LayoutMenuAccount from '../../../Components/Layout/menuAccount.js'
import LayoutBodyAccount from '../../../Components/Layout/bodyAccount.js'
import AccountMenu from '../../../Components/Account/Menu/index.js'
import AccountRequest from '../../../Components/Account/Request/index.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import accountMenu from '../../../helpers/account/menu/index.js'

function Request(props) {


    /*const's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    const
        accountMenuInformations = accountMenu.accountMenuInformations,
        accountBodyAccountTableDefaultCartHeads = [
            'preço', 'quantidade', 'total', 'visualização'
        ],
        accountBodyAccountTableDefaultDetailsDeliveryHeads = [
            'cep', 'rua', 'número', 'cidade'
        ],

        accountBodyAccountTableDefaultCartInformations = [
            { reference: 'act_0001', value: '10.99', quantity: '2', total: '21.98', url: 'http://localhost:9998/products/act_0001', icon: <i className="fas fa-eye"></i> },
            { reference: 'act_0002', value: '29.99', quantity: '2', total: '59.98', url: 'http://localhost:9998/products/act_0002', icon: <i className="fas fa-eye"></i> }
        ],
        accountBodyAccountTableDefaultPaymentHeads = [
            'forma de pagamento', 'frete', 'valor', 'total'
        ],
        accountBodyAccountTableDefaultPaymentInformations = [
            { paymentMethod: 'cartão - 2x', frete: '17.99', value: '81.96', total: '99.95' }
        ],
        accountBodyAccountTableDefaultDeliveryStatusHeads = [
            'status', 'data'
        ],
        accountBodyAccountTableDefaultDeliveryStatusInformations = [
            { code: '1', status: 'entregue há transportadora', data: '01.07.2020' },
            { code: '2', status: 'em trânsito', data: '13.08.2020' },
            { code: '3', status: 'entregue', data: '15.08.2020' }
        ],
        accountBodyAccountTableDefaultPaymentStatusHeads = [
            'status', 'data'
        ],
        accountBodyAccountTableDefaultPaymentStatusInformations = [
            { code: '1', status: 'boleto gerado', data: '17.06.2020' },
            { code: '2', status: 'pagamento recebido', data: '21.06.2020' },
        ]

    if (typeof window !== 'undefined') {

        /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        var [InitialInnerWidth, setInitialInnerWidth] = useState(window.innerWidth)

        /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        useEffect(() => { props.verifyAuthentication() }, [])



        if (props.login.authentication.authenticated !== null) {
            if (props.login.authentication.authenticated === true) {

                if (window.innerWidth > 720) {
                    return (
                        <Layout backgroundColor={'#f5f5f5'}>
                            <Header
                                InitialInnerWidth={InitialInnerWidth}
                                setInitialInnerWidth={setInitialInnerWidth}
                                Desktop={true}
                                Mobile={false}
                                Default={true} />
                            <SubHeader
                                informations={props[0].payload}
                                Desktop={true}
                                Mobile={false} />
                            <LayoutAccount>

                                <LayoutMenuAccount>
                                    <AccountMenu informations={accountMenuInformations} selected={'request'} />
                                </LayoutMenuAccount>

                                <LayoutBodyAccount>

                                    <AccountRequest
                                        query={props.query}
                                        cartHeads={accountBodyAccountTableDefaultCartHeads}
                                        detailsDeliveryHeads={accountBodyAccountTableDefaultDetailsDeliveryHeads}
                                        cartInformations={accountBodyAccountTableDefaultCartInformations}
                                        paymentHeads={accountBodyAccountTableDefaultPaymentHeads}
                                        paymentInformations={accountBodyAccountTableDefaultPaymentInformations}
                                        deliveryStatusHeads={accountBodyAccountTableDefaultDeliveryStatusHeads}
                                        deliveryStatusInformations={accountBodyAccountTableDefaultDeliveryStatusInformations}
                                        paymentStatusHeads={accountBodyAccountTableDefaultPaymentStatusHeads}
                                        paymentStatusInformations={accountBodyAccountTableDefaultPaymentStatusInformations} />

                                </LayoutBodyAccount>

                            </LayoutAccount>
                        </Layout>
                    )
                }


                if (window.innerWidth <= 720) {
                    return (
                        <Layout backgroundColor={'#f5f5f5'}>
                            <Header
                                InitialInnerWidth={InitialInnerWidth}
                                setInitialInnerWidth={setInitialInnerWidth}
                                Desktop={false}
                                Mobile={true}
                                Account={true} />
                            <LayoutAccount>

                                <LayoutMenuAccount>
                                    <AccountMenu informations={accountMenuInformations} selected={'request'} />
                                </LayoutMenuAccount>

                                <LayoutBodyAccount>

                                    <AccountRequest
                                        query={props.query}
                                        cartHeads={accountBodyAccountTableDefaultCartHeads}
                                        detailsDeliveryHeads={accountBodyAccountTableDefaultDetailsDeliveryHeads}
                                        cartInformations={accountBodyAccountTableDefaultCartInformations}
                                        paymentHeads={accountBodyAccountTableDefaultPaymentHeads}
                                        paymentInformations={accountBodyAccountTableDefaultPaymentInformations}
                                        deliveryStatusHeads={accountBodyAccountTableDefaultDeliveryStatusHeads}
                                        deliveryStatusInformations={accountBodyAccountTableDefaultDeliveryStatusInformations}
                                        paymentStatusHeads={accountBodyAccountTableDefaultPaymentStatusHeads}
                                        paymentStatusInformations={accountBodyAccountTableDefaultPaymentStatusInformations} />

                                </LayoutBodyAccount>

                            </LayoutAccount>
                        </Layout>
                    )
                }


            } else { window.location.href = '/login?authenticated=false' }
        } else { return (<></>) }
    } else { return (<></>) }

}

Request.getInitialProps = async ctx => {

    return (
        getBaseInfo([
            actions.getSubHeaders
        ], ctx)
    )

}

const mapStateToProps = (state, ownProps) => ({
    ...state, ownProps
})
export default connect(mapStateToProps, actions)(Request)
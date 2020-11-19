/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState, useEffect } from 'react'

/*redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import DefaultLabel from '../../Label/Default/index.js'
import TextAndLabelInput from '../../Input/TextAndLabel/index.js'
import TextAndLabelSelect from '../../Input/SelectAndLabel/index.js'
import DefaultCheckbox from '../../Input/Checkbox/Default/index.js'
import DefaultButton from '../../Button/Default/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledContainerCheckoutPageList,

    StyledSectionNavigationBar, StyledSectionNavigationBarItem,

    StyledContainerFreteOptions, StyledContainerFreteOption,

    StyledSectionTextAndLabelSelect,

    StyledSectionNavigationButton, StyledSpinner
} from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import TextInputStructure from '../../../helpers/components/input/TextInputStructure.js'
import { codigosDosCorreios } from '../../../helpers/codigosDosCorreios/index.js'
import { zipCodeFormat, reaisPayment } from '../../../helpers/format/index.js'
import { whatsappRequest } from '../../../helpers/checkout/whatsapp/request.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function CheckoutPageList(props) {

    /*const's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    const
        TextInputStructureDeliveryInformation = TextInputStructure.deliveryInformation,
        TextInputStructureSelectDeliveryInformation = TextInputStructure.selectDeliveryInformation,
        TextInputStructureSelectPaymentInformations = TextInputStructure.selectPaymentInformations,
        TextInputStructureSelectOptionsDeliveryInformation = TextInputStructure.selectOptionsDeliveryInformation,
        TextInputStructureSelectOptionsPaymentInformations = TextInputStructure.selectOptionsPaymentInformations

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    let
        accountAddressInformation = props.login.authentication.accountInformations.address,

        [focusedInputs, setFocusedInputs] = useState({ cep: false, neighborhood: false, street: false, number: false, city: false }),
        [invalidInputs, setInvalidInputs] = useState({ cep: false, neighborhood: false, street: false, number: false, city: false }),
        [valuesInputs, setValuesInputs] = useState({
            cep: (accountAddressInformation.cep || ''),
            neighborhood: (accountAddressInformation.neighborhood || ''),
            street: (accountAddressInformation.street || ''),
            number: (accountAddressInformation.number || ''),
            city: (accountAddressInformation.city || '')
        }),
        [selectedStateOption, setSelectedStateOption] = useState((accountAddressInformation.state || '')),
        [WhatsappSelectedPaymentOption, WhatsappSetSelectedPaymentOption] = useState('PAGAMENTO A VISTA'),

        [page, setPage] = useState(1),
        [lastZipSearched, setLastZipSearched] = useState(''),
        [selectedFrete, setSelectedFrete] = useState({ '40010': true, '41106': false }),

        [pageButtonMessage, setPageButtonMessage] = useState({
            '1': {
                '1': <span>calcular frete</span>,
                '2': <StyledSpinner><i className="fas fa-spinner" /></StyledSpinner>,
                '3': <span onClick={() => setPage(2)}>continuar com o frete</span>,
                'option': null
            },
            '2': {
                '1': <span>continuar com o pagamento</span>,
                'option': null
            },
            '3': {
                '1': <span>finalizar a compra</span>,
                'option': null
            }
        }),
        [WhatsappPageButtonMessage, WhatsappSetPageButtonMessage] = useState({
            '1': {
                '1': <span>enviar pedido</span>
            }
        })


    /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    useEffect(() => {
        props.checkoutGetPaymentSession()
    }, [])

    useEffect(() => {
        props.checkoutSetForm(valuesInputs)
    }, [valuesInputs])

    useEffect(() => {
        /*
        const {
            cardNumber,
            cardMonth,
            cardYear,
            cardCVV,
            cardFlag,
            cardInstallment,
            cardToken
        } = props.form

        if (!cardFlag && cardNumber && cardNumber.split(' ').join().length > 7) {
            props.getCardBrand()
        }

        if (
            !cardToken && cardNumber && cardNumber.split(' ').join().length === 16 &&
            cardMonth && cardMonth.length === 2 &&
            cardYear && cardYear.length === 4 &&
            cardCVV && cardCVV.length === 3 &&
            cardFlag
        ) {
            props.getTheCardHash()
        }

        props.getCardInstallments()

        }
*/
    }, [props.form])



    /*render functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function SPAInformations() {
        return (
            <>
                <button onClick={() => console.log(props)}>c log props</button>
                <DefaultLabel label={'informações de entrega'} fontSize={window.innerWidth > 500 ? 2 : window.innerWidth > 400 ? 1.8 : 1.6} fontWeight={600} color={'rgb(102,102,102)'} maxWidth={'90%'}>

                    {TextInputStructureDeliveryInformation.map((inputInfo, index) =>
                        (<>
                            <TextAndLabelInput key={index}
                                onChange={() => setDataValue()}
                                onFocus={() => focusIn()}
                                onBlur={() => focusOut()}
                                focus={focusedInputs[inputInfo.name]}
                                invalid={invalidInputs[inputInfo.name]}
                                label={inputInfo.placeholder}
                                name={inputInfo.name}
                                value={inputInfo.name === 'cep' ? zipCodeFormat(valuesInputs[inputInfo.name]) : valuesInputs[inputInfo.name]}
                                type={'text'}
                                containerWidth={'100%'} border={'0.2rem rgba(153,153,153,1) solid'} borderRadius={0}
                                validBorder={'0.2rem rgba(102,102,102,1) solid'}
                                errorIcon={inputInfo.errorIcon}
                            />
                        </>))
                    }

                </DefaultLabel >

                <StyledSectionTextAndLabelSelect >

                    {TextInputStructureSelectDeliveryInformation.map((inputSelect, index) =>
                        (<>
                            <TextAndLabelSelect key={index}
                                onClick={selected => setSelectedStateOption(selected)}
                                label={selectedStateOption || inputSelect.placeholder}
                                options={TextInputStructureSelectOptionsDeliveryInformation}
                                selected={selectedStateOption}
                                containerWidth={'33%'} border={'0.2rem rgba(153,153,153,1) solid'} borderRadius={0}
                                focusBorder={'0.2rem rgba(102,102,102,1) solid'}
                            />
                        </>))
                    }
                    {
                        props.whatsapp.whatsappVersion && TextInputStructureSelectPaymentInformations.map((inputSelect, index) =>
                            (<>
                                <TextAndLabelSelect key={index}
                                    onClick={selected => WhatsappSetSelectedPaymentOption(selected)}
                                    label={WhatsappSelectedPaymentOption || inputSelect.placeholder}
                                    options={TextInputStructureSelectOptionsPaymentInformations}
                                    selected={selectedStateOption}
                                    containerWidth={'66%'} border={'0.2rem rgba(153,153,153,1) solid'} borderRadius={0}
                                    focusBorder={'0.2rem rgba(102,102,102,1) solid'}
                                />
                            </>))
                    }

                </StyledSectionTextAndLabelSelect>
            </>
        )
    }

    function SPAFrete() {
        return (
            <DefaultLabel label={'selecione o tipo de frete'} fontSize={window.innerWidth > 500 ? 2 : window.innerWidth > 400 ? 1.8 : 1.6} fontWeight={600} color={'rgb(102,102,102)'} maxWidth={'90%'}>

                <StyledContainerFreteOptions>

                    {props.frete.options.map((option, index) =>
                        (<>
                            <StyledContainerFreteOption key={index}>

                                <DefaultCheckbox
                                    onClick={selected => {
                                        setSelectedFrete({ '40010': false, '41106': false, [selected]: true })
                                        props.updateCartFrete(props.frete.options[index])
                                    }}
                                    value={option.Codigo} checked={selectedFrete[option.Codigo]} />

                                <span>{codigosDosCorreios[option.Codigo]}</span>
                                <span>{option.PrazoEntrega} dias</span>
                                <span>R$ {option.Valor}</span>

                            </StyledContainerFreteOption>
                        </>))
                    }

                </StyledContainerFreteOptions>

            </DefaultLabel>
        )
    }

    function SPAPayment() {
        return (
            <></>
        )
    }

    function RouterButton() {
        return (
            <StyledSectionNavigationButton>

                { !props.whatsapp.whatsappVersion ? (
                    <DefaultButton
                        margin={' 0rem 0rem 2rem 0rem'} containerWidth={window.innerWidth >= 800 ? 26 : '100%'} width={'100%'} height={5} size={1.6} weight={600} borderRadius={0} color={'#FFFFFF'} backgroundColor={'#4bbd8d'} hoverColor={'rgba(255,255,255,1)'} borderColor={'#2bab75'} hoverBackgroundColor={'#2bab75'} icon={''}
                        onClick={() => {

                            props.verifyAuthentication('true')

                            if (checkTheValidityOfTheInput()) {

                                if (typeof props.cart !== 'undefined') {

                                    if (page === 1 && valuesInputs.cep !== lastZipSearched) {
                                        calculateShipping()
                                    }

                                } else { alert('primeiro adicione alguns itens ao carrinho') }

                            }

                        }}>

                        {
                            applyButtonMessage(page)
                        }

                    </DefaultButton>

                ) : (
                        <DefaultButton
                            containerWidth={window.innerWidth >= 800 ? 26 : '100%'} width={'100%'} height={5} imgHeight={2} size={2} weight={600} borderRadius={0} color={'#FFFFFF'} backgroundColor={'#4ad295'} hoverColor={'rgba(255,255,255,1)'} borderColor={'#2bab75'} hoverBackgroundColor={'#2BC48A'} icon={''} img={'/svg/whatsapp.svg'}
                            onClick={async () => {

                                props.verifyAuthentication('true')
                                if (checkTheValidityOfTheInput()) {

                                    props.checkoutWhatsappSendNewRequest(

                                        props.cart,
                                        ((props.cart).reduce((acumulator, item) => acumulator + Number(item.unitaryValue) * Number(item.quantity), 0)).toFixed(2),
                                        props.checkoutForm,
                                        WhatsappSelectedPaymentOption

                                    ).then((newRequestId) => {

                                            let request = whatsappRequest({
                                                cart: props.cart,
                                                login: props.login.authentication.accountInformations,
                                                valuesInputs,
                                                selectedStateOption,
                                                WhatsappSelectedPaymentOption,
                                                requestId: newRequestId
                                            })

                                            window.open(request, `_blank`, `width=${window.innerWidth},height=${window.innerHeight}`);

                                        })

                                }

                            }}>
                            { WhatsappPageButtonMessage[1][1]}
                        </DefaultButton>
                    )
                }



            </StyledSectionNavigationButton>
        )
    }


    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <StyledContainerCheckoutPageList>


            <StyledSectionNavigationBar>

                <StyledSectionNavigationBarItem onClick={() => window.location.href = '/cart'} >
                    carrinho
                </StyledSectionNavigationBarItem>&nbsp;&nbsp;


                <StyledSectionNavigationBarItem onClick={() => {
                    (page !== 1) && setPage(1)
                }} selected={page === 1} >informações</StyledSectionNavigationBarItem>&nbsp;&nbsp;


                {!props.whatsapp.whatsappVersion && (<>

                    <StyledSectionNavigationBarItem onClick={() => {
                        (page !== 1) && setPage(2)
                    }} selected={page === 2} >frete</StyledSectionNavigationBarItem> &nbsp;&nbsp;


                    <StyledSectionNavigationBarItem selected={page === 3} >
                        pagamento
                    </StyledSectionNavigationBarItem>

                </>)}

            </StyledSectionNavigationBar>


            { page === 1 && SPAInformations()}

            { !props.whatsapp.whatsappVersion && page === 2 && SPAFrete()}

            { !props.whatsapp.whatsappVersion && page === 2 && SPAPayment()}

            { RouterButton()}


        </StyledContainerCheckoutPageList>
    )




    /*functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function setDataValue() {
        let target = event.target, targetName = target.name, targetValue = target.value

        setValuesInputs({ ...valuesInputs, [targetName]: targetValue })
    }
    function focusIn() {

        let isInvalid = [], setThisAsValid = {}, target = event.target

        for (const keys in valuesInputs) {
            valuesInputs[keys] ? '' : isInvalid.push(keys)
        }

        isInvalid.map(inputName => {
            setThisAsValid[inputName] = false
        })

        setInvalidInputs({
            ...invalidInputs, ...setThisAsValid
        })

        target.placeholder = ''

        setFocusedInputs(Object.assign({}, focusedInputs, focusedInputs[target.name] = true))

    }
    function focusOut() {

        let target = event.target

        if (!target['data-value']) {

            target.placeholder = target.dataset.placeholder

        }

        setFocusedInputs(Object.assign({}, focusedInputs, focusedInputs[target.name] = false))

    }
    function checkTheValidityOfTheInput() {

        let isInvalid = [], setThisAsInvalid = {}

        for (const keys in valuesInputs) {
            valuesInputs[keys] ? '' : isInvalid.push(keys)
        }

        if (isInvalid.length === 0 && selectedStateOption) {

            return true

        } else {

            isInvalid.map(inputName => {
                setThisAsInvalid[inputName] = true
            })

            setInvalidInputs({
                ...invalidInputs, ...setThisAsInvalid
            })

            return false
        }

    }
    function getThisButtonMessage(message) {

        pageButtonMessage[page]['option'] = null
        pageButtonMessage[page]['option'] = message

        return pageButtonMessage[page]['option']

    }
    function applyButtonMessage(page) {

        if (props.whatsapp.whatsappVersion) {
            if (page === 1) {

                if (
                    (typeof props.frete.cep === 'undefined' && lastZipSearched === '') ||
                    (typeof props.frete.cep !== 'undefined' && typeof props.frete.selectedFrete === 'undefined') ||
                    (typeof props.frete.cep !== 'undefined' && lastZipSearched != valuesInputs.cep) ||
                    (props.frete.selectedFrete && props.frete.selectedFrete.Valor === '0,00')
                ) {
                    return getThisButtonMessage(pageButtonMessage[page][1])
                } else if (
                    (typeof props.frete.cep === 'undefined' && lastZipSearched !== '') ||
                    (typeof props.frete.cep !== 'undefined' && props.frete.cep !== lastZipSearched)
                ) {
                    return getThisButtonMessage(pageButtonMessage[page][2])
                } else if (
                    typeof props.frete.cep !== 'undefined' && props.frete.cep === lastZipSearched &&
                    lastZipSearched === valuesInputs.cep && props.frete.selectedFrete && props.frete.selectedFrete.Valor !== '0,00'
                ) {
                    return getThisButtonMessage(pageButtonMessage[page][3])
                }

            } else if (page === 2) {

                return getThisButtonMessage(pageButtonMessage[page][1])

            } else if (page === 3) {

                return getThisButtonMessage(pageButtonMessage[page][1])

            }
        } else {
            return getThisButtonMessage(pageButtonMessage[page][1])
        }

    }
    async function calculateShipping() {

        setLastZipSearched(valuesInputs.cep)
        props.calculateShipping(valuesInputs.cep, await props.setThisCart(props.login.authentication.user_id))

    }

    /*structure functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function getCardBrand() {
        const { cartNumber } = props.form
        PagSeguroDirectPayment.getBrand({
            cadBin:
                cartNumber.split(' ').join('').slice(0, 6),
            success: response => props.checkoutSetForm({ cardFlag: response.brand }),
            error: responseError => console.log(responseError)
        })
    }

    function getTheCardHash() {

        const
            { cartNumber, cartMonth, cartYear, cartCVV, cartFlag } = props.form,
            params = {
                cartNumber: cartNumber.split(' ').join(''),
                brand: cartFlag.name,
                cvv: cartCVV,
                expirationMonth: cartMonth,
                expirationYear: cartYear,
                success: response => props.checkoutSetForm({ cardToken: response.card.token }),
                error: responseError => console.log(responseError)
            }

        PagSeguroDirectPayment.createCardToken(params)

    }

    function getCardInstallments() {

        const
            { selectedFrete } = props.frete,
            { cart } = props,
            { cartFlag } = props.form

        let
            cartTotal = ((cart || []).reduce((acumulator, item) => acumulator + Number(item.unitaryValue) * Number(item.quantity), 0)).toFixed(2),
            freteValue = selectedFrete.Valor.replace(',', '.')

        PagSeguroDirectPayment.getInstallments({
            amount: cartTotal + freteValue,
            maxInstallmentNoInterest: 6,
            maxInstallment: 6,
            brand: cartFlag.name,
            success: info => {
                props.checkoutSetForm({ installments: info.installments })
                props.checkoutSetForm({ installmentsSelected: info.installments[cartFlag.name][0] })
            },
            error: responseError => console.log(responseError)
        })

    }

}

const mapStateToProps = (state, ownProps) => ({
    ...state,
    cart: state.cart.cart,
    frete: {
        options: state.cart.frete,
        selectedFrete: state.cart.selectedFrete,
        cep: state.cart.cep,
    },
    checkoutForm: state.checkout.form,
    ownProps
})
export default connect(mapStateToProps, actions)(CheckoutPageList)
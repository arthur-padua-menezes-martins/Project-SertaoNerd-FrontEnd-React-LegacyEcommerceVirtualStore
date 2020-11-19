/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'

/*redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import DefaultLabel from '../../Label/Default/index.js'
import TextAndLabelInput from '../../Input/TextAndLabel/index.js'
import ContainerDefaultButton from '../../Button/Default/container.js'
import DefaultButton from '../../Button/Default/index'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import TextInputStructure from '../../../helpers/components/input/TextInputStructure.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    SyledContainerAccountPerfil,
    SyledContainerAccountPerfilInputs,
    SyledSectionAccountPerfilInputs, SyledSectionAccountPerfilInputsPersonalData, SyledSectionAccountPerfilInputsAddressData
} from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function AccountPerfil(props) {

    /*const's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    const
        TextInputStructurePersonalInformation = TextInputStructure.personalInformation,
        TextInputStructureDeliveryInformation = TextInputStructure.deliveryInformation

    /*var's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var
        WindowIW = window.innerWidth,
        DefaultLabelMaxWidth = WindowIW > 1200 ? '90%' : '86%'

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var
        [onlyReading, setOnlyReading] = useState({ name: true, email: true, cpf: true, cep: true, street: true, number: true, city: true, state: true }),
        [focusedInputs, setFocusedInputs] = useState({ name: false, email: false, cpf: false, cep: false, street: false, number: false, city: false, state: false }),
        [valuesInputs, setValuesInputs] = useState({
            name: (props.login.authentication.accountInformations.name || ''),
            email: (props.login.authentication.accountInformations.email || ''),
            cpf: (props.login.authentication.accountInformations.cpf || ''),
            cep: (props.login.authentication.accountInformations.address.cep || ''),
            street: (props.login.authentication.accountInformations.address.street || ''),
            number: (props.login.authentication.accountInformations.address.number || ''),
            city: (props.login.authentication.accountInformations.address.city || ''),
            state: (props.login.authentication.accountInformations.address.state || '')
        })




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <SyledContainerAccountPerfil>

            <SyledContainerAccountPerfilInputs>

                <SyledSectionAccountPerfilInputs>

                    <SyledSectionAccountPerfilInputsPersonalData>

                        <DefaultLabel flexDirection={'row'} justifyContent={'end'} alignItens={'baseline'} flexWrap={'wrap'} fontSize={window.innerWidth > 500 ? 2 : window.innerWidth > 400 ? 1.6 : 1.4} fontWeight={600} color={'rgb(102,102,102)'} maxWidth={DefaultLabelMaxWidth}>
                            {
                                TextInputStructurePersonalInformation.map((inputInfo, index) => (
                                    <>
                                        <TextAndLabelInput key={index}
                                            onChange={() => setDataValue()}
                                            onFocus={() => focusIn()}
                                            onBlur={() => focusOut()}
                                            focus={focusedInputs[inputInfo.name]}
                                            onlyReading={true}
                                            label={inputInfo.placeholder}
                                            name={inputInfo.name}
                                            value={valuesInputs[inputInfo.name]}
                                            type={'text'}
                                            data-placeholder={inputInfo.placeholder} data-value={valuesInputs[inputInfo.name]}
                                            margin={'2rem 2rem 2rem 0rem'} containerWidth={`100%`} containerMaxWidth={`${(valuesInputs[inputInfo.name] || ' ').length}rem`} border={'0.2rem rgba(153,153,153,1) solid'} borderRadius={0}
                                            validBorder={'0.2rem rgba(102,102,102,1) solid'}
                                            onlyReadingBorder={'0.2rem rgba(102,102,102,0.1) solid'}
                                            errorIcon={inputInfo.errorIcon}
                                        />
                                    </>
                                ))
                            }
                        </DefaultLabel>

                    </SyledSectionAccountPerfilInputsPersonalData>


                    <SyledSectionAccountPerfilInputsAddressData>

                        <DefaultLabel flexDirection={'row'} justifyContent={'end'} alignItens={'baseline'} flexWrap={'wrap'} fontSize={window.innerWidth > 500 ? 2 : window.innerWidth > 400 ? 1.6 : 1.4} fontWeight={600} color={'rgb(102,102,102)'} maxWidth={DefaultLabelMaxWidth}>
                            {
                                TextInputStructureDeliveryInformation.map((inputInfo, index) => (
                                    <>
                                        <TextAndLabelInput key={index}
                                            onChange={() => setDataValue()}
                                            onFocus={() => focusIn()}
                                            onBlur={() => focusOut()}
                                            focus={focusedInputs[inputInfo.name]}
                                            onlyReading={true}
                                            label={inputInfo.placeholder}
                                            name={inputInfo.name}
                                            value={valuesInputs[inputInfo.name]}
                                            type={'text'}
                                            data-placeholder={inputInfo.placeholder} data-value={valuesInputs[inputInfo.name]}
                                            margin={'2rem 2rem 2rem 0rem'} containerWidth={`100%`} containerMaxWidth={`${(valuesInputs[inputInfo.name] || ' ').length}rem`} border={'0.2rem rgba(153,153,153,1) solid'} borderRadius={0}
                                            validBorder={'0.2rem rgba(102,102,102,1) solid'}
                                            onlyReadingBorder={'0.2rem rgba(102,102,102,0.1) solid'}
                                            errorIcon={inputInfo.errorIcon}
                                        />
                                    </>
                                ))
                            }
                        </DefaultLabel>

                    </SyledSectionAccountPerfilInputsAddressData>

                    <ContainerDefaultButton className={'ContainerDefaultButton'} containerWidth={40} flexDirection={window.innerWidth > 800 ? 'row' : 'row'}>

                        <DefaultButton margin={'0rem 0rem 2rem 0rem'} justifyContent={'flex-end'} containerWidth={window.innerWidth > 800 ? '45%' : '90%'} width={'100%'} height={5} imgHeight={3} size={1.6} weight={500} borderWidth={0} borderRadius={2.5} color={'#4ad295'} backgroundColor={'transparent'} borderColor={'#4ad295'} hoverColor={'#4ad295'} hoverBackgroundColor={'transparent'} icon={''} img={'/svg/circle_cross.svg'}></DefaultButton>


                        <DefaultButton margin={'0rem 0rem 2rem 0rem'} justifyContent={'flex-end'} containerWidth={window.innerWidth > 800 ? '45%' : '90%'} width={'100%'} height={5} imgHeight={3} size={1.6} weight={500} borderWidth={0} borderRadius={2.5} color={'#4ad295'} backgroundColor={'transparent'} borderColor={'#4ad295'} hoverColor={'#4ad295'} hoverBackgroundColor={'transparent'} icon={''} img={'/svg/circle_check.svg'}></DefaultButton>

                    </ContainerDefaultButton>

                </SyledSectionAccountPerfilInputs>

            </SyledContainerAccountPerfilInputs>

        </SyledContainerAccountPerfil>
    )




    /*functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function setDataValue() {
        var target = event.target

        setValuesInputs(Object.assign({}, valuesInputs, valuesInputs[target.name] = event.target.value))
    }
    function focusIn() {
        var target = event.target

        target.placeholder = ''
        setFocusedInputs(Object.assign({}, focusedInputs, focusedInputs[target.name] = true))
    }
    function focusOut() {
        var target = event.target

        if (!target['data-value']) {
            target.placeholder = target.dataset.placeholder
        }
        setFocusedInputs(Object.assign({}, focusedInputs, focusedInputs[target.name] = false))

    }
}

const mapStateToProps = (state, ownProps) => ({ ...state, ownProps })
export default connect(mapStateToProps, actions)(AccountPerfil)
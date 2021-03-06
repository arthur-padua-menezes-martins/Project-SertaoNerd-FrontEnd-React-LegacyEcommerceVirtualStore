/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'
import Link from 'next/link'

/*redux*******************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import TextInput from '../../Components/Input/Text/index.js'
import DefaultLabel from '../../Components/Label/Default/index.js'
import ContainerDefaultButton from '../../Components/Button/Default/container.js'
import DefaultButton from '../../Components/Button/Default/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledContainerRegisterPage, SyledSectionRegisterPage } from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import TextInputStructure from '../../helpers/components/input/TextInputStructure.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function RegisterPage(props) {

    /*const's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    const inputStrtucture = TextInputStructure.register

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var
        [focusedInputs, setFocusedInputs] = useState({ email: false, password: false }),
        [valuesInputs, setValuesInputs] = useState({ email: '', password: '' })




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <StyledContainerRegisterPage>

            <SyledSectionRegisterPage>
                <DefaultLabel>

                    {
                        inputStrtucture.map((inputInfo, index) => (
                            <>
                                <TextInput key={index}
                                    onChange={() => setDataValue()}
                                    onFocus={() => focusIn()}
                                    onBlur={() => focusOut()}
                                    focus={focusedInputs[inputInfo.name]}
                                    name={inputInfo.name}
                                    placeholder={inputInfo.placeholder}
                                    data_placeholder={inputInfo.placeholder}
                                    data_value={valuesInputs[inputInfo.name]}
                                    icon={inputInfo.icon}
                                    inputWidth={'86%'} fontWeight={500} borderWidth={0.2} borderColor={'rgba(255,75,0,0.4)'} borderStyle={true} borderRadius={0}
                                />
                            </>
                        ))
                    }

                </DefaultLabel>
            </SyledSectionRegisterPage>

            <ContainerDefaultButton containerWidth={40} justifyContent={'space-between'}>

                <Link href={'/login'}>
                    <DefaultButton containerWidth={'45%'} width={'100%'} height={5} imgHeight={1.6} size={1.6} weight={600} color={'rgba(255,75,0,1)'} borderColor={'transparent'} backgroundColor={'transparent'} hoverColor={'rgba(255,75,0,1)'} hoverBackgroundColor={'transparent'} icon={''} img={'/svg/arrow_left_back_bold.svg'}>
                        retornar
                    </DefaultButton>
                </Link>

                <DefaultButton
                    onClick={() => props.sendRegisterCredentials()}
                    containerWidth={'45%'} width={'100%'} height={5} size={1.6} weight={600} color={'rgba(255,255,255,1)'} borderWidth={0.2} borderRadius={0} backgroundColor={'rgba(255,75,0,1)'} hoverBackgroundColor={'rgba(255,75,0,0.8)'} icon={<i class="fas fa-user-plus"></i>}>
                    registrar-se
                </DefaultButton>

            </ContainerDefaultButton>

        </StyledContainerRegisterPage>
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

        if (!target['data-value']) target.placeholder = target.placeholder = target.dataset.placeholder
        setFocusedInputs(Object.assign({}, focusedInputs, focusedInputs[target.name] = false))
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state, ownProps
})
export default connect(mapStateToProps, actions)(RegisterPage)
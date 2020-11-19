/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'
import Link from 'next/link'

/*redux*******************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../redux/actions/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import DefaultLabel from '../../Components/Label/Default/index.js'
import TextInput from '../../Components/Input/Text/index.js'
import ContainerDefaultButton from '../../Components/Button/Default/container.js'
import DefaultButton from '../../Components/Button/Default/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledContainerLoginPage, SyledSectionLoginPage } from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import TextInputStructure from '../../helpers/components/input/TextInputStructure.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function LoginPage(props) {


    /*const's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    const inputStructure = TextInputStructure.login

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var
        [focusedInputs, setFocusedInputs] = useState({ email: false, password: false }),
        [valuesInputs, setValuesInputs] = useState({ email: '', password: '' })




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <StyledContainerLoginPage>

            <SyledSectionLoginPage>
                <DefaultLabel>

                    {
                        inputStructure.map((inputInfo, index) => (
                            <>
                                <TextInput key={index}
                                    onChange={() => setDataValue()}
                                    onFocus={() => focusIn()}
                                    onBlur={() => focusOut()}
                                    focus={focusedInputs[inputInfo.name]}
                                    name={inputInfo.name}
                                    type={inputInfo.type}
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
            </SyledSectionLoginPage>


            <ContainerDefaultButton containerWidth={40} justifyContent={'space-between'}>
                <DefaultButton
                    onClick={async () => {
                        await props.sendLoginCredentials(valuesInputs.email, valuesInputs.password).then((response) => {
                            if (response === true)
                                window.location.href = '/'
                        })
                    }}
                    containerWidth={'100%'} width={'100%'} height={5} imgHeight={2.6} size={1.6} weight={600} color={'rgba(255,255,255,1)'} borderWidth={0} borderRadius={0} backgroundColor={'rgba(255,75,0,1)'} hoverBackgroundColor={'rgba(255,75,0,0.8)'} icon={''} img={'/svg/send.svg'}>
                    logar-se
                </DefaultButton>
            </ContainerDefaultButton>

            <ContainerDefaultButton containerWidth={40} justifyContent={'space-between'}>
                <Link href={'/register'}>
                    <DefaultButton containerWidth={'35%'} width={'100%'} height={5} size={1.6} weight={400} color={'rgba(204,204,204,1)'} borderWidth={0} borderColor={'transparent'} backgroundColor={'transparent'} hoverColor={'rgba(153,153,153,1)'} hoverBackgroundColor={'transparent'} icon={''}>
                        nova conta
                    </DefaultButton>
                </Link>

                <Link href={'/recover-password'}>
                    <DefaultButton containerWidth={'60%'} width={'100%'} height={5} size={1.6} weight={400} color={'rgba(204,204,204,1)'} borderWidth={0} borderColor={'transparent'} backgroundColor={'transparent'} hoverColor={'rgba(153,153,153,1)'} hoverBackgroundColor={'transparent'} icon={''}>
                        esqueci minha senha
                    </DefaultButton>
                </Link>
            </ContainerDefaultButton>


        </StyledContainerLoginPage>
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
    login: state.login
})
export default connect(mapStateToProps, actions)(LoginPage)
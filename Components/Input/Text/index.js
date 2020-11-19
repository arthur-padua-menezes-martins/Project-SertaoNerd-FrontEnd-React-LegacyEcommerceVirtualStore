/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledContainerTextInput, StyledSectionTextInput, StyledLabelTextInput, StyledInputTextInput, StyledIconTextInput } from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function TextInput({ 
    label = false, type = 'text', value, name, placeholder, disabled = false, icon = false, 
    containerWidth, containerHeight, inputWidth, fontWeight = 400, borderWidth = false, borderColor = false, borderStyle = false, borderRadius,
    focus = false, onlyReading = false, onClick, onChange, onFocus, onBlur, data_placeholder = '', data_value = '', children 
}) {
    return (
        <StyledContainerTextInput containerWidth={containerWidth} containerHeight={containerHeight}>

            {label && (<StyledSectionTextInput>
                <StyledLabelTextInput>
                    {label}
                </StyledLabelTextInput>
            </StyledSectionTextInput>)}

            <StyledSectionTextInput onlyReading={onlyReading} focus={focus} placeholder={placeholder} borderWidth={borderWidth} borderColor={borderColor} borderStyle={borderStyle} data-value={data_value}>

                {icon && (<StyledIconTextInput onlyReading={onlyReading} focus={focus} data-value={data_value}>{icon}</StyledIconTextInput>)}

                <StyledInputTextInput onlyReading={onlyReading} focus={focus} onClick={onClick} onFocus={onFocus} onBlur={onBlur} type={type} value={value} name={name} placeholder={placeholder} disabled={disabled} inputWidth={inputWidth} fontWeight={fontWeight} onChange={onChange} data-placeholder={data_placeholder} data-value={data_value} />

            </StyledSectionTextInput>

        </StyledContainerTextInput>
    )
}
export default TextInput
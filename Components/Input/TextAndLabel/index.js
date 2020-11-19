/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledContainerTexAndLabelInput,
    StyledSection, StyledLabel, StyledInput, StyledErrorIcon
} from './styles'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function TexAndLabelInput({
    label, type, value, name, disabled = false,
    onlyReading = false, focus = false, invalid = false, data_placeholder = '', data_value = '',
    onClick, onChange, onFocus, onBlur,
    margin = '0rem 0rem 2rem 0rem', containerWidth, containerMaxWidth, align = 'left', border, borderRadius,
    validBorder,
    onlyReadingBorder,
    errorIcon,
    children
}) {
    return (

        <StyledContainerTexAndLabelInput key={name} margin={margin} containerWidth={containerWidth} containerMaxWidth={containerMaxWidth}>

            <StyledSection
                focus={focus} valid={value} invalid={invalid} onlyReading={onlyReading} value={value}
                align={align} border={border} borderRadius={borderRadius}
                validBorder={validBorder}
                onlyReadingBorder={onlyReadingBorder}>


                <StyledInput
                    id={name} type={type} value={value} name={name} required={true} disabled={disabled}
                    align={align}
                    focus={focus} data-placeholder={data_placeholder} data-value={data_value}
                    onClick={onClick} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />


                <StyledLabel
                    for={name} invalid={invalid}
                    align={align}>
                    {label}
                </StyledLabel>


                {invalid && (
                    <StyledErrorIcon>
                        {errorIcon}
                    </StyledErrorIcon>
                )}


            </StyledSection>

        </StyledContainerTexAndLabelInput>

    )
}
export default TexAndLabelInput
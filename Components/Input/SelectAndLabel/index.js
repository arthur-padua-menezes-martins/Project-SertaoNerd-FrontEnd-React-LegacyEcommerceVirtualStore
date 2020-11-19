/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledContainerSelectAndLabelInput,
    StyledSectionToHeader, StyledSelectButton,
    StyledSectionToItems, StyledItems
} from './styles'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function TexAndLabelInput({
    label, options,
    containerWidth, border, borderRadius,
    focusBorder,
    selected,
    onClick
}) {
    return (

        <StyledContainerSelectAndLabelInput
            containerWidth={containerWidth}>


            <StyledSectionToHeader
                containerWidth={containerWidth}
                border={border} borderRadius={borderRadius}
                focusBorder={focusBorder}
                selected={selected}>

                <StyledSelectButton>
                    {label}
                </StyledSelectButton>

                <i className="fas fa-angle-down"></i>

            </StyledSectionToHeader>


            <StyledSectionToItems border={border} >

                {
                    options.map(option => (
                        <StyledItems
                            onClick={() => onClick(option.name)}
                            name={option.name}>{option.name}</StyledItems>
                    ))
                }

            </StyledSectionToItems>


        </StyledContainerSelectAndLabelInput>

    )
}
export default TexAndLabelInput
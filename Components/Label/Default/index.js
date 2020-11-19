/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledContainerDefaultLabel, StyledSectionDefaultLabel, StyledLabelDefaultLabel } from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function DefaultLabel({ label, icon, StyledTheme = false, flexDirection = 'column', justifyContent = 'center', alignItens = 'center', flexWrap = 'no-wrap', maxWidth = '100%', marginBottom, fontSize = 1.6, fontWeight = 500, color, children }) {
    return (
        <StyledContainerDefaultLabel StyledTheme={StyledTheme} maxWidth={maxWidth} marginBottom={marginBottom}>

            {label && (
                <StyledLabelDefaultLabel fontSize={fontSize} fontWeight={fontWeight} color={color}>
                    <span>{label}{icon}</span>
                </StyledLabelDefaultLabel>
            )}

            <StyledSectionDefaultLabel flexDirection={flexDirection} justifyContent={justifyContent} flexWrap={flexWrap} alignItens={alignItens}>
                {children}
            </StyledSectionDefaultLabel>

        </StyledContainerDefaultLabel>
    )
}
export default DefaultLabel

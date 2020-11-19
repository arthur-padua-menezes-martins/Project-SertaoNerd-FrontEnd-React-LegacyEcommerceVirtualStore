/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledSectionDefaultButton, StyledButtonDefaultButton, StyledImg } from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function DefaultButton({ staticDefinition = false, selected = false, margin = 0, containerWidth, justifyContent, width, height, imgHeight = 1.6, size, weight, color, backgroundColor, borderWidth = false, borderColor, borderRadius, hoverColor, hoverBackgroundColor, icon, img, onClick, children }) {
    return (
        <StyledSectionDefaultButton margin={margin} containerWidth={containerWidth} justifyContent={justifyContent}>

            <StyledButtonDefaultButton staticDefinition={staticDefinition} selected={selected} width={width} height={height} size={size} weight={weight} color={color} backgroundColor={backgroundColor} borderWidth={borderWidth} borderColor={borderColor} borderRadius={borderRadius} hoverColor={hoverColor} hoverBackgroundColor={hoverBackgroundColor}
                onClick={onClick}>

                {icon && icon}

                {img &&
                    <StyledImg height={imgHeight} src={img} alt={img} />
                }

                <span>{children}</span>

            </StyledButtonDefaultButton>

        </StyledSectionDefaultButton>
    )
}
export default DefaultButton
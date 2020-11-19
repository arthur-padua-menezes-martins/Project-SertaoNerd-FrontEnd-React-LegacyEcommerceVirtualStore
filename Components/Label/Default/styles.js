import styled, { css } from 'styled-components'
export const

    StyledContainerDefaultLabel = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: end;

        margin: auto;
        margin-bottom: ${props => `${props.marginBottom}rem` || '2rem'};

        width: ${props => props.maxWidth};

        ${props => props.StyledTheme && css``}
    `,

        StyledLabelDefaultLabel = styled.label`
        display: flex;
        align-items: center;

        min-width: 100%;      
        min-height: 4rem; 

        font-size: ${props => `${props.fontSize}rem`};
        font-weight: ${props => props.fontWeight};
        color: ${props => props.color || props.theme.colors.primary};

        span {
            display: flex;
            justify-content: center;

            margin: auto;

            max-width: 92%;
        }
    `,

    StyledSectionDefaultLabel = styled.section`
        display: flex;
        flex-direction: ${props => props.flexDirection};
        justify-content: ${props => props.justifyContent};
        flex-wrap: ${props => props.flexWrap};
        
        align-items: ${props => props.alignItems};
    `
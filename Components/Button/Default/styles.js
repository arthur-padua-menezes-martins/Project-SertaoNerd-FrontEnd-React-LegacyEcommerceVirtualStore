import styled, { css } from 'styled-components'
export const

    StyledContainerDefaultButton = styled.main`
        display: flex;

        flex-direction: ${props => props.flexDirection};
        justify-content: ${props => props.justifyContent};
        align-items: center;

        width: ${props => typeof props.containerWidth === 'number' ? `${props.containerWidth}rem` : props.containerWidth};
    `,

    StyledSectionDefaultButton = styled.section`
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-around'};
    align-items: center;

    margin: ${props => typeof props.margin === 'number' ? `${props.margin}rem` : props.margin};

    width: ${props => typeof props.containerWidth === 'number' ? `${props.containerWidth}rem` : props.containerWidth};
    `,

    StyledButtonDefaultButton = styled.button`
        display: flex;

        justify-content: center;
        align-items: center;

        min-width: ${props => typeof props.width === 'number' ? `${props.width}rem` : props.width};
        min-height: ${props => `${props.height}rem`};
        max-height: ${props => `${props.height}rem`};

        font-size: ${props => `${props.size}rem`};
        font-weight: ${props => props.weight};

        color: ${props => !props.selected ? props.color : '#FFFFFF'};

        background-color: ${props => !props.selected ? props.backgroundColor : props.color};

        ${props => 
            css`border: ${props =>  `${props.borderWidth}rem`} ${props.borderColor || ''} solid;`
        };

        border-radius: ${props => props.borderRadius != null ? `${props.borderRadius}rem` : '0.4rem'};

        cursor: pointer;
        transition-property: background-color, height;
        transition-duration: 0.4s;

        &:hover {
            color: ${props => props.hoverColor ? props.hoverColor : '#FFFFFF'};
            background-color: ${props => props.hoverBackgroundColor ? props.hoverBackgroundColor : props.theme.colors.primary};
        }

        span, i {
            margin: 0rem 0.4rem;
        }

        a {
            color: ${props => !props.selected ? props.color : '#FFFFFF'};
        } 

        @media only screen and (max-width: 1200px) {
            min-width: ${props => `${props.width * 0.9}rem`};
            min-height: ${props => `${props.height * 0.9}rem`};
            font-size: ${props => `${props.size * 0.9}rem`};
        }  

        ${props => props.staticDefinition &&
            css`
                @media only screen and (max-width: 720px) { min-width: 22rem; }
                @media only screen and (max-width: 450px) { min-width: 18rem; }
                @media only screen and (max-width: 380px) { min-width: 16rem; }
            `
        } 
    `,
    
    StyledImg = styled.img`
    
    min-height: ${props => `${props.height}rem`};
    max-height: ${props => `${props.height}rem`};

    fill: white;
    
    `
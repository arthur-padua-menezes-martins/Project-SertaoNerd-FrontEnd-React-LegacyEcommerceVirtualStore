import styled, { css } from 'styled-components'
export const

    StyledContainerTextInput = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: auto;
        margin-bottom: 2rem;

        min-width: ${props => typeof props.containerWidth === 'number' ? `${props.containerWidth}rem` : typeof props.containerWidth === 'string' ? props.containerWidth : '100%'};
        max-width: ${props => typeof props.containerWidth === 'number' ? `${props.containerWidth}rem` : typeof props.containerWidth === 'string' ? props.containerWidth : '100%'};  
    `,

    StyledSectionTextInput = styled.section`
        display: flex;
        justify-content: space-around;
        align-items: center;

        margin: auto;
    
        min-width: 100%;
        max-width: 100%;
        min-height: 2.2rem;
        max-height: 2.2rem;

        ${props => (props.placeholder) &&
            css`
                min-height: 4rem;

                border: ${props => props.borderWidth ? `${props.borderWidth}rem` : '0.1rem'} ${props => props.borderColor ? props.borderColor : props.theme.colors.primary} ${props => props.borderStyle ? 'solid' : 'dashed'};
                border-radius: ${props => props.borderRadius};
            `
        }

        ${props => (props.focus || props['data-value']) &&
            css`
               border: ${props => props.borderWidth ? `${props.borderWidth}rem` : '0.1rem'} ${props => props.theme.colors.primary} ${props => props.borderStyle ? 'solid' : 'dashed'};
            `
        }

        ${props => props.onlyReading &&
            css` 
                border:  ${props => props.borderWidth ? `${props.borderWidth}rem` : '0.1rem'} rgba(102,102,102,0.4) ${props => props.borderStyle ? 'solid' : 'dashed'};
            `
        }
    `,

    StyledLabelTextInput = styled.label`
        display: flex;
        justify-content: left;

        min-width: ${props => props.inputWidth ? props.inputWidth : '92%'};
        max-width: ${props => props.inputWidth ? props.inputWidth : '92%'};

        font-size: 1.8rem;
        color: rgba(255,75,0,0.6); 
    `,

    StyledInputTextInput = styled.input`
        min-width: ${props => props.inputWidth ? props.inputWidth : '92%'};
        max-width: ${props => props.inputWidth ? props.inputWidth : '92%'};
        min-height: inherit;

        font-size: 1.6rem;
        font-weight: ${props => props.fontWeight};
        color: rgba(255,75,0,0.4);  

        ${props => props.disabled &&
            css`
                background-color: transparent;
            `
        }

        ${props => props.placeholder &&
            css`
                min-width: '80%';
                min-height: 2.2rem;

                background-color: transparent;

                color: ${props => props.theme.colors.primary};

                &::placeholder {
                    font-weight: ${props => props.fontWeight};
                    color: ${props => props.onlyReading ? 'rgba(102,102,102,0.4)' : 'rgba(255,75,0,0.4)'}; 
                }
            `
        }

        ${props => props.onlyReading &&
            css`color: rgba(102,102,102,0.4);`
        }

        cursor: pointer;
    `,
    StyledIconTextInput = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;

        font-size: 1.4rem;
        color: rgba(255,75,0,0.4);
        
        ${props => (props.focus || props['data-value']) &&
            css`
                color: ${props => props.theme.colors.primary};
            `
        }

        ${props => props.onlyReading &&
            css`color: rgba(102,102,102,0.4);`
        }

        img {
            min-height: 2rem;
            max-height: 2rem;
        }
    `
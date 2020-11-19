import styled, { css } from 'styled-components'
export const

    StyledContainerTexAndLabelInput = styled.main`
        margin: ${props => props.margin};

        width: ${props => props.containerWidth};
        min-width: 20rem;
        max-width: ${props => props.containerMaxWidth};
    `,

    StyledSection = styled.section`
        position: relative;
        
        display:flex;
        align-items: center;

        padding-left: 2rem;

        height: 5rem;

        border: ${props => props.border};
        border-radius: ${props => `${props.borderRadius}rem`};

        transition: all 0.2s;

        ${props => (props.onlyReading) &&
            css`
                border: ${props => props.onlyReadingBorder};
            `
        }

        ${props => (props.valid || props.focus) &&
            css`
                border: ${props => props.validBorder};
            `
        }

        ${props => props.invalid &&
            css`
                border: 0.2rem rgba(255,25,0,1) solid;
            `
        }

        ${props => props.align === 'center' &&
            css`
                padding-left: 0rem;

                justify-content: center;
            `
        }
    `,

    StyledLabel = styled.label`
        position: absolute;
        top: 1.8rem;
        left: 2rem;

        height: 2rem;

        font-size: 1.4rem;
        font-weight: 400;
        color: ${props => props.theme.colors.grayTertiary};

        pointer-events: none;

        transition: all 0.2s;

        ${props => props.invalid &&
            css`
                color: rgba(255,25,0,1);
            `
        }

        ${props => props.align === 'center' &&
            css`
                left: auto;
            `
        }
    `,

    StyledInput = styled.input`
        box-sizing: border-box;
        position: relative;

        width: 100%;

        font-weight: 500;

        background-color: transparent;

        cursor: pointer;

        &:focus {
            top: 0.8rem;
        }
        &:valid {
            top: 0.8rem;
        }
        &:focus ~ label {
            font-size: 1.2rem;
            top: 0.6rem;
        }
        &:valid ~ label {
            font-size: 1.2rem;
            top: 0.6rem;
        }

        ${props => props.align === 'center' ?
            css`
                text-align: center;
            ` :
            css`

            `
        }
    `,

    StyledErrorIcon = styled.span`
        position: absolute;
        right: 2rem;

        font-size: 2rem;
        color: rgba(255,25,0,1);
    `
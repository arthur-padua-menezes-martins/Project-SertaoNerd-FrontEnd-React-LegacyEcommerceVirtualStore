import styled, { css } from 'styled-components'
export const

    StyledContainerSelectAndLabelInput = styled.main`
        position: relative;

        width: ${props => props.containerWidth};
        min-width: 12rem;

        &:hover {
            section:last-child {
                visibility: visible;
                opacity: 1;
            }
        }
    `,

    StyledSectionToHeader = styled.section`
        position: relative;
        
        display:flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 2rem;

        height: 5rem;

        font-size: 1.4rem;

        border: ${props => props.border};
        border-radius: ${props => `${props.borderRadius}rem`};

        transition: all 0.2s;

        cursor: pointer;

        ${props => props.selected && 
            css`
                border: ${props => props.focusBorder};
            `
        }
    `, 

    StyledSectionToItems = styled.section`
        position: relative;

        display:flex;
        flex-direction: column;
        align-items: center;

        margin-top: 1rem;

        max-height: 9.6rem;

        background-color: #FFFFFF;

        border-radius: ${props => `${props.borderRadius}rem`};

        visibility: hidden;
        opacity: 0;

        overflow: hidden;
        overflow-y: scroll;

        transition: opacity 0.2s linear, visibility 0.2s linear;

        &:hover {
            visibility: visible;
            opacity: 1;
        }

        ${props => (props.valid || props.focus) && 
            css`
                border: ${props => props.validBorder};
            `
        }
    `, 

    StyledSelectButton = styled.span`
        
    `,

    StyledItems = styled.div`
        padding: 1rem;  

        width: 100%;

        font-size: 1.2rem;

        cursor: pointer;

        &:hover {
            background-color: rgba(204,204,204,0.4);
        }
    `
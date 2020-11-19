import styled, { css } from 'styled-components'
export const

    StyledContainerButtonAmountProduct = styled.main`
        display: flex;

        flex-direction: row;
        align-items: center;

        justify-content: ${props => props.justifyContent || 'space-around'};

        margin: 0 auto !important;
 
        width: ${props => props.width || '100%'};

        section {
            display: flex;
        
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            min-height: 4rem;
            max-height: 4rem;
        }
    `,

    StyledArticleButtonAmountProduct = styled.article`
        display: flex;

        justify-content: center;
        align-items: center;

        input, div {
            ${props => props.border === true ? css`border: 0.1rem ${props => props.theme.colors.primary} solid;` : css`border: 0;`};
        }

        input {
            min-width: 4rem;
            max-width: 4rem;
            min-height: 4rem;
            max-height: 4rem;

            text-align: center;
            font-size: 1.4rem;
            font-weight: 500;
            color: ${props => props.theme.colors.primary};

            border-right: 0rem;
        }

        div {
            display: flex;

            justify-content: center;
            align-items: center;

            min-width: 4rem;
            max-width: 4rem;
            min-height: 4rem;
            max-height: 4rem; 
            
            border-left: 0rem;
            
            div {
                display: flex;

                flex-direction: column;
                justify-content: center;

                border-right: 0rem;
                
                button {
                    min-width: 8rem !important;
                    height: inherit !important;

                    font-size: 1.2rem;  
                    color: rgba(255,75,0,0.4); 

                    background-color: transparent;

                    cursor: pointer;

                    &:hover {
                        color: rgba(255,75,0,0.6); 
                    }
                }   
            }
                    
        }

    `
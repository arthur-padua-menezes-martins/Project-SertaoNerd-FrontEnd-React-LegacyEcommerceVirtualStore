import styled, { css } from 'styled-components'
export const 
    
    StyledContainerDeliveryOptionsAndPaymentOptions = styled.main`
        display: grid;
        grid-template-areas: 'StyledContainerPaymentTableOptions StyledContainerPaymentOptions';
        grid-template-columns: 0.6FR 0.35FR;

        justify-content: space-around;
        align-items: center;

        margin: 6rem auto;

        max-width: 90vw;
        height: ${props => props.height ? `${props.height}rem` : '20rem;'};

        border-radius: 0.8rem;

        ${props => props.display === 'column' ? 
            css`
                grid-template-areas: 'StyledContainerPaymentTableOptions StyledContainerPaymentOptions';
            ` : 

            css`
                grid-template-areas: 'StyledContainerPaymentTableOptions' 'StyledContainerPaymentOptions';
                grid-template-columns: 100%;
            `
        }

        @media only screen and (max-width: 799px) {
            grid-template-columns:  1FR;
            grid-template-areas: 'StyledContainerPaymentTableOptions' 'StyledContainerPaymentOptions';
            
            height: ${props => props.height ? `${props.height}rem` : '40rem;'};

            background-color: transparent;
        }
    `,


    StyledContainerOptionsInterface = styled.main`
        display: flex;
    
        margin: auto;

        width: 100%;
        height: 100%; 
    `,
    StyledContainerPaymentTableOptions = styled(StyledContainerOptionsInterface)`
        grid-area: StyledContainerPaymentTableOptions;

        justify-content: center;
        align-items: center;

        article {
            table {
                box-shadow: 0.2rem 0.2rem 1.6rem rgba(227,227,227,1);
            }
        }

        @media only screen and (max-width: 799px) {
            height: 14rem;

            border-radius: 0.8rem;
        }
    `,
    StyledContainerPaymentOptions = styled(StyledContainerOptionsInterface)`
        grid-area: StyledContainerPaymentOptions;

        min-width: ${props => typeof props.width === 'number' ? `${props.width}rem` : props.width};
        min-height: 20rem;
            
        border-radius: 0.8rem;
    `,


/*payment************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    StyledSectionPaymentOptions = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        margin: auto;
        margin-top: auto;

        width: calc(100% - 3rem);
        height: calc(100% - 3rem);        
    `,
    StyledSectionPaymentOptionsInterface = styled.section`
        display: flex;

        flex-direction: column;
        align-items: center;
        
        width: unset;
        min-height: 10rem;

        color: ${props => props.theme.colors.primary};
    `,
    StyledSectionPaymentOptionsValues = styled(StyledSectionPaymentOptionsInterface)`

        table { 
            tbody { 
                tr { 
                    text-align: left; 
                    
                    td { 
                        font-size: 1.4rem;
                    } 
                } 
            }
        }

    `,
    StyledSectionPaymentOptionsContinue = styled(StyledSectionPaymentOptionsInterface)`
        flex-direction: ${props => props.flexDirection};
        justify-content: ${props => props.justifyContent};
        align-items: center;
    `
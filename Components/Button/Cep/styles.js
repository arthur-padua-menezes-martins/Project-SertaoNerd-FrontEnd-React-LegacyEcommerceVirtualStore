import styled, { css } from 'styled-components'
export const

    StyledContainerButtonCep = styled.section`
    display: flex;
    justify-content: end;
    flex-direction: row;
    align-items: center;
    `,

    StyledArticleButtonCep = styled.article`
    
        display:flex;

        min-height: inherit;
        max-height: inherit;

        input, div {
            border: 0.2rem rgba(255,75,0,0.4) dashed;
        }

        input {
            padding-left: 1rem;

            min-width: ${props => props.inputWidth ? props.inputWidth : '14rem'};
            max-width: ${props => props.inputWidth ? props.inputWidth : '14rem'};

            font-size: 1.4rem;
            font-weight: 500;
            color: ${props => props.theme.colors.primary};

            border-right: 0 !important; 

            &::placeholder {
                color: rgba(255,75,0,0.6);
            }
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            min-width: ${props => props.buttonWidth ? props.buttonWidth : '7rem'};
            max-width: ${props => props.buttonWidth ? props.buttonWidth : '7rem'};
            max-height: inherit !important;
            min-height: inherit !important;

            border-left: 0 !important;

            button {
                min-width: inherit !important;
                max-width: inherit !important;
                max-height: inherit;
                height: 100%;

                font-size: 1.3rem;
                font-weight: 600;
                color: rgba(255,75,0,0.6);

                background-color: transparent; 

                cursor: pointer;
                transition-property: 'color backgroundColor';
                transition: 0.2s;

                &:hover {
                    color: #FFFFFF;
                    background-color: ${props => props.theme.colors.primary};
                }
            }   
        }

        @media only screen and (max-width: 1199px) {
           input {
                min-width: ${props => props.inputWidth ? props.inputWidth * 0.9 : '12rem'};
                max-width: ${props => props.inputWidth ? props.inputWidth * 0.9 : '12rem'};
           }
        }

        @media only screen and (max-width: 800px) {
           input {
                min-width: ${props => props.inputWidth ? props.inputWidth * 0.1 : '10rem'};
                max-width: ${props => props.inputWidth ? props.inputWidth * 0.8 : '10rem'};
           }
        }
    
    `
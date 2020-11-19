import styled, { css } from 'styled-components'
export const

    StyledContainerCheckoutTable = styled.main`
        display: flex;
        flex-direction: column;

        section {
            margin-bottom: 1rem;
        }
    `,

    StyledArticleCheckoutTable = styled.article`
        overflow-y: auto;

        height: ${props => `${props.cartLenght * 12}rem`};
        max-height: 70vh;

        border-bottom: 0.1rem rgba(204,204,204,0.2) solid;
    `,   

    StyledSectionCheckoutTable = styled.section`
        display: flex;
        align-items: center;

        min-height: 10rem;
        max-height: 10rem;
    `

    , StyledSectionOne = styled.section`
        position: relative;       
    
        div{
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: -0.5rem;
            right: -1rem;

            width: 2rem;
            height: 2rem;

            color: #FFFFFF;

            background-color: ${props => props.theme.colors.graySecondary};

            border-radius: 50%;
        }

        img {
            max-width: 8rem;
        }

        @media only screen and (max-width: 400px) {
            img {
                max-width: 6rem;
            }
        }
    `

    , StyledSectionTwo = styled.section`
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            margin: auto;
            
            div {
                margin: 1rem;
                font-size: 1.2rem;
            }
            div:first-child {
                margin-bottom: 1rem;

                color: ${props => props.theme.colors.grayQuaternary};
                font-weight: 600;
            }
            div:last-child {
                color: ${props => props.theme.colors.grayTertiary};
            }

            @media only screen and (max-width: 400px) {
                div {
                    font-size: 1rem;
                }
            }
        }
    `

    , StyledSectionThree = styled.section`
        display: flex;
        flex: 0.5;
        justify-content: center;

        font-weight: 600;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.grayQuaternary};

        @media only screen and (max-width: 400px) {
            font-size: 1.4rem;
        }
    `
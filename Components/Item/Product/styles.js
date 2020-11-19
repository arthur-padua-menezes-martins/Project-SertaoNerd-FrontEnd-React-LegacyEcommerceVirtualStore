import styled, { css } from 'styled-components'
export const

    StyledSectionProduct = styled.section`

    margin: auto;

    display: flex;  
    flex-direction:row;
    justify-content: center;
    align-items: center;
    
    min-height: inherit;

    article {
        display: flex;

        min-width: 22rem;
        max-height: inherit; 

        flex-direction:column;
        justify-content: center;
        align-items: center;

        background-position: cover;

        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center; 

            min-width: 100%;
        }

        div:first-child {
            min-height: 22rem; 
            img {
                max-height: 22rem; 
                max-width: 22rem; 
            }
        }

        div:nth-child(2) {
            img {
                min-width: 1.6rem;
                max-width: 1.6rem;
                min-height: 1.6rem;
                max-height: 1.6rem;
            }
        }

        div:nth-child(3) {

            justify-content: end;

            min-height: 4rem;
            max-height: 4rem;

            line-height: 2rem;
            span {
                font-size: 1.6rem;
                font-weight: 400;
                color: ${props => props.theme.colors.grayQuaternary};
            }
        }

        div:nth-child(4) {
            flex-direction: row;

            min-height: 4rem;
            max-height: 4rem;
            
            span {
                width: 100%;
            }
            span:nth-child(1) { 
                text-decoration: line-through;
                font-size: 1.8rem;
                font-weight: 400;
                color: ${props => props.theme.colors.grayPrimary};
            }
            span:nth-child(2) {
                font-size: 2.2rem;
                font-weight: 6s00;
                color: ${props => props.theme.colors.grayQuaternary};
            }
        }

    }

        @media only screen and (min-width: 720px)  { min-width: 24rem; max-width: 24rem; }

        @media only screen and (min-width: 801px)  { min-width: 26.6rem; max-width: 26.6rem; }

        @media only screen and (min-width: 1001px) { min-width: 25rem; max-width: 25rem; }

        @media only screen and (max-width: 720px) { 
            min-width: 50vw; max-width: 50vw; 

            article {
                div:first-child {
                    min-height: 22rem;  
                    min-width: 22rem; 
                    img {  
                        max-height: 22rem;  
                        max-width: 22rem; 
                    }
                }
            }
        }

        @media only screen and (max-width: 450px) {
            article {
                min-width: 18rem;
                div:first-child { 
                    min-height: 18rem;  
                    min-width: 18rem; 
                    img { 
                        max-height: 18rem; 
                        max-width: 18rem; 
                    } 
                }

                div:nth-child(3), div:nth-child(4) { min-width: 18rem; }
            }
        }

        @media only screen and (max-width: 380px) {
            article {
                min-width: 16rem;
                div { 
                    img { 
                        max-height: 16rem; 
                        max-width: 16rem; 
                    } 
                }

                div:nth-child(3), div:nth-child(4) { min-width: 16rem; }
            }
        }
    `
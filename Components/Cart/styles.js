import styled, { css } from 'styled-components'
export const

    StyledSectionHeaderCart = styled.section`
        display: grid;
        grid-template: 40px / auto auto auto auto;
        grid-area: HeaderCart;

        justify-content: center;
        
        color: white;
        font-size:1.4rem;
    `,


    StyledArticleHeaderCart = styled.article`
    
        position: relative;
        display: flex;

        align-items: center;

        img {
          
        }

        span {
            position: absolute;

            display: flex;

            justify-content: center;
            align-items: center;
                        
            background-color: ${props => props.theme.colors.tertiary};
            border-radius: 50%;
        }

        @media only screen and (min-width: 900px) {

            min-width: 3.2rem;

            img {
                min-height: 2.2rem;
                max-height: 2.2rem;
            }

            span {
                top: -0.6rem;
                right: -1.4rem;
                
                width: 2.6rem;
                height: 2.6rem;

                font-size: 1.1rem;
            }

        }

        @media only screen and (max-width: 899px) {

            min-width: 3rem;
            
            img {
                min-height: 2rem;
                max-height: 2rem;
            }

            span {
                top: -0.4rem;
                right: -1.2rem;

                width: 2.4rem;
                height: 2.4rem;

                font-size: 1rem;
            }

        }
        

        ${ props => props.account === true &&
            css`
                i {
                    
                }
            `
        }


        ${ props => props.cart === true &&
            css`
                i {
                    
                }

                span {

                }
            `
        }
    
    `,

    StyledSectionHeaderContainerMobile = styled.section`
        
    display: grid;
    grid-area: MobileHeaderCart;

    div {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        span {  
            font-size: 1.2rem;
            font-weight: 700;

            i {
            font-size: 1.8rem;
            margin-bottom: 0.4rem;
            } 

            img {
                min-width: 2.6rem;
                min-height: 1.8rem;
                max-height: 1.8rem;
            }
        }  
    }

    `
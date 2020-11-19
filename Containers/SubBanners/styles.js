import styled, { css } from 'styled-components'
export const

    SubBannersContainer = styled.main`

        box-sizing: border-box;

        width: 100%;
        max-width: 100rem;
        min-height: 18rem;
        max-height: 18rem;

        margin: auto;

        section {
            display: grid;
            grid-template-columns: 1FR 1FR 1FR 1FR; 
            justify-content: center;
            
            margin: 1rem 0rem 4rem 0rem;

            min-height: inherit;
            max-height: inherit;

            -webkit-justify-content: normal;
            article {
                
                display: flex;
                flex-direction: column;

                margin: auto;

                min-height: inherit;
                max-height: inherit;

                transform: scale(0.9);
                transition: 0.4s;

                cursor: pointer;

                &:hover {
                    transform: scale(1);
                }

                span {

                    margin: auto;
                    
                    img {
                        min-height: inherit;
                        max-height: inherit;
                    }
                }
                span:nth-child(1) {
                    min-height: 16rem;
                    max-height: 16rem;
                }
                span:nth-child(2) {
                    min-height: 2rem;
                    max-height: 2rem;

                    font-size:1.8rem;
                    font-weight: 700;
                    color: ${props => props.theme.colors.grayQuaternary};
                }
            }
        }

        @media only screen and (max-width: 1000px) {
            min-height: 20rem;
            max-height: 20rem;
        }

        @media only screen and (max-width: 721px) {
            overflow-x: scroll;
            overflow-y: hidden;

            section {
                article {
                    span:nth-child(1) {
                        min-height: 14rem;
                        max-height: 14rem;
                    }
                    span:nth-child(2) {

                    }
                }
            }
        }

    `        
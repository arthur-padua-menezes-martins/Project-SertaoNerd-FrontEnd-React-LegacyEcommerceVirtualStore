import styled, { css } from 'styled-components'
export const

    StyledContainerCartTable = styled.main`
        margin: auto;

        min-width: 90vw;
        max-width: 90vw;
    
        border-radius: 0.4rem;
    `,

    StyledContainerTable = styled.table`
        margin: auto;

        min-width: calc( 100% - 4rem );
        max-width: calc( 100% - 4rem );

        min-height: ${props => `${props.productsLenght * 10 + 4}rem`};

        box-shadow: 0.2rem 0.2rem 1.6rem rgba(227,227,227,1);

        @media only screen and (max-width: 800px) {
            min-height: ${props => `${props.productsLenght * 16}rem`};
            min-width: 100%;
            max-width: 100%;
        }

    `,

    StyledContainerTableBody = styled.tbody`
        min-height: ${props => `${props.productsLenght * 10}rem`};
        max-height: ${props => `${props.productsLenght * 10}rem`};
    `,

    StyledContainerTableRow = styled.tr`

        &:nth-child(2n) {
            background-color: rgba(250,250,255,1);
            
            tr:nth-child(2) td:nth-child(2), td:nth-child(4) {
                main { section { article { input { mix-blend-mode: multiply; -webkit-blend-mode: multiply; } } } }
            }
        }

        &:nth-child(2n -1) {
            background-color: rgba(245,245,255,1);

            tr:not(:first-child) { 
            }

            tr:nth-child(2) td:nth-child(2), td:nth-child(4) {
                main { section { article { input { mix-blend-mode: multiply; } } } }
            }
        }

        @media only screen and (min-width: 800px) {
            min-height: 4rem;
            max-height: 14rem;
        }

        @media only screen and (max-width: 800px) {
            align-items: center;

            min-height: 8rem;
            max-height: 16rem;

            tr:nth-child(1) {
                display: flex;

                width: 100%;

                text-align: center;

                background-color: unset;

                td {
                    display: flex;

                    justify-content: center;
                    align-items: center;
                }
                td:nth-child(1) {
                    min-width: 60%;
                    max-width: 80%;
                }
                td:nth-child(2) {
                    min-width: 20%;
                    max-width: 20%;
                }
                td:nth-child(3) {
                    min-width: 20%;
                    max-width: 20%;
                }
            }

            tr:nth-child(2) {
                display: flex;
                
                width: 100%;    

                text-align: center;

                background-color: unset;

                td {
                    display: flex;

                    justify-content: center;
                    align-items: center;
                    
                    min-width: 33.33%;
                    max-width: 33.33%;

                    span {
                        width: 100%;
                    }
                }
            }  
        }
        

    `,

    StyledContainerTableData = styled.td`
        
        min-width: 4rem;
        max-width: 8rem;
        min-height: 4rem;
        max-height: 6rem;

        font-size: 1.4rem;
        font-weight: 600;
        color: ${props => props.theme.colors.grayTertiary};

        ${props => props.value &&
            css`
                min-width: 6rem;
                max-width: 6rem;

                span {
                    display: flex;
                    justify-content: center;

                    width: 100%;
                }
            `
        }

        &:first-of-type {
            min-width: 20vw;
            max-width: 20vw;
        }

        &:hover {
            ${props => props.title === true || props.trash === true && css`color: rgba(255,75,0,0.9); cursor: pointer`};
        }

        &:nth-child(1) {
            div {
                display: flex;
                align-items: center;
            }
        }

        main {
            margin: auto; 
            
            min-width: 80%;
            max-width: 80%;
            section {
                min-width: 100%;
                article {
                    min-width: 100%;
                    input {
                        min-width: 4rem;
                        max-width: 4rem;
                    }
                    div {
                        min-width: 2rem;    
                        max-width: 2rem;
                    }
                }
            }
        }

        div {
            img {
            min-height: 12rem;
            max-height: 12rem;
            }
        }

        span {
            width: 100%;
        }

        @media only screen and (max-width: 800px) {
            div {
                img {
                    min-height: 8rem;
                    max-height: 8rem;
                }
            }

            ${props => props.title &&
                css`
                    justify-content: end !important;
                `
            }
        }
    `
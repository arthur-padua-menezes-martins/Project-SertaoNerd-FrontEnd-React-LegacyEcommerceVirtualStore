import styled from 'styled-components'
export const

    StyledContainerHomePageProducts = styled.main`

        display: flex;

        flex-direction: column;      
        justify-content: center;
        align-items: center;

        margin: auto;

        min-width:100rem;
        max-width:100rem;
        min-height:46rem;
        max-height:46rem;

        overflow: hidden;

        @media only screen and (max-width: 1000px) 
        { 
            min-width:80rem; 
            max-width:80rem; 
        }
        @media only screen and (max-width: 800px) 
        { 
            min-width:72rem; 
            max-width:72rem; 
        }

        div {
            display: flex;

            flex-direction: column;
            justify-content: center;
            
            min-width:inherit;
            max-width:inherit;
            min-height:inherit;
            max-height:inherit;
        }

    `,


    StyledHeaderProducts = styled.header`
    
        position: relative;
        
        width: 100%;

        &, span {
            display: inline-block; 

            min-height: 4rem;
            max-height: 4rem;

            font-size: 3rem;
            line-height:4rem;
        }

        span {
            position:absolute;

            font-weight: 700;
            color: ${props => props.theme.colors.primary};

            background-color: white;

            z-index:2;
        }

        &::after {
            content: '';
            
            position: absolute;

            display: inline-block;
            
            top: 50%;

            width: 100%;
            height: 0.2rem;

            background-color: ${props => props.theme.colors.primary};

            z-index:1;
        }

        @media only screen and (max-width: 800px) {
            width: 96%;

            &::after {
            
            }
        }
    `
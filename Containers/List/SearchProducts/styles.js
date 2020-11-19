import styled from 'styled-components'
export const 

    StyledContainerSearchProducts = styled.main`
    
        display: flex;
        flex-direction: column;

        margin: 8rem auto;
        
        justify-content: center;
        align-items: center;

        min-width:80rem;
        max-width:80rem;

        max-height: ${props => props.minHeight+'rem'};

        overflow: hidden;

        border: 0.25rem black solid;

        @media only screen and (max-width: 1000px) 
        { 
            min-width:60rem; 
            max-width:60rem; 
        }
        @media only screen and (max-width: 800px) 
        { 
            min-width:72rem; 
            max-width:72rem; 
        }
        @media only screen and (max-width: 800px) 
        { 
            min-width:${props => `${Math.floor(props.innerWidth) / 10}rem`}; 
            max-width:${props => `${Math.floor(props.innerWidth) / 10}rem`}; 
        }


    `
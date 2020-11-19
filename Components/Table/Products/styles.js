import styled from 'styled-components'
export const 

    StyledSectionTableProducts = styled.section`

        display: grid;
        grid-template-columns: repeat(${props => props.productsByLine}, 1FR);
        grid-row-gap: 4rem;
        
        max-width: inherit;
        min-width: inherit;

    `
import styled from 'styled-components'
export const

    StyledSectionProducts = styled.section`
        display: grid;
        grid-template-columns: repeat(${props => props.productsLength}, 1FR);

        max-width: inherit;
        min-width: inherit;
    `
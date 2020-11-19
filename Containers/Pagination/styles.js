import styled, { css } from 'styled-components'
export const

    StyledContainerPagination = styled.main`
    
        display: flex;

        justify-content: center;
        align-items: center;

        font-size: 3rem;

        width: 100%;
        height: 5rem;
    
    `,


    StyledArticlePagination = styled.article`
        display: flex;

        margin: 1rem;

        justify-content: center;
        align-items: center;

        width: 3.6rem;
        height: 3.6rem;

        font-size: 2rem;
        color: #000000;

        ${props => props.pageIndex === (props.thisPage) ?
            css`color: #FFFFFF; border: 0.2rem rgba(255,75,0,1) solid; background-color: rgba(255,75,0,1);` :
            css`border: 0.2rem rgba(255,75,0,0.2) solid; background-color: rgba(255,75,0,0.2);`
        }

        border-radius: 0.4rem;

        cursor: pointer
    `
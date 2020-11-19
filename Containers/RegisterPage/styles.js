import styled, { css } from 'styled-components'
export const 
    
    StyledContainerRegisterPage = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        min-height: 100vh;
        max-height: auto;

        div:nth-child(2) {
            min-width: 40rem;
            max-width: 40rem;
        }

        @media only screen and (max-height: 690px) {
            min-height: calc( 160vh);
        }
    `,

    SyledSectionRegisterPage = styled.section`
        min-width: 40rem;
        max-width: 40rem;
    `
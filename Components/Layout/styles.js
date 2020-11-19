
/*account***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import styled, { css } from 'styled-components'
export const

    StyledContainerLayoutAccount = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;

        margin: auto;
        padding: 2rem;

        height: calc( 100vh - 10rem );

        @media only screen and (min-width: 360px) {
            min-width: 36rem;
            max-width: 36rem;
        }

        @media only screen and (min-width: 400px) {
            min-width: 40rem;
            max-width: 40rem;
        }

        @media only screen and (min-width: 500px) {
            min-width: 50rem;
            max-width: 50rem;
        }

        @media only screen and (min-width: 600px) {
            min-width: 60rem;
            max-width: 60rem;
        }

        @media only screen and (min-width: 720px) {
            min-width: 72rem;
            max-width: 72rem;
        }

        @media only screen and (min-width: 760px) {
            min-width: 76rem;
            max-width: 76rem;
        }

        @media only screen and (min-width: 800px) { 
            min-width: 80rem;
            max-width: 80rem;
        }

        @media only screen and (min-width: 900px) {
            min-width: 90rem;
            max-width: 90rem;
        }

        @media only screen and (min-width: 1200px) {
            min-width: 100rem;
            max-width: 100rem;
        }
    `,

    StyledSectionLayoutAccount = styled.section`
        display: grid;
        grid-template-areas: 'MenuAccount BodyAccount';
        grid-template-columns: 0.2FR 1FR;
        grid-template-rows: 1FR;

        width: 100%;
        height: 100%;

        overflow-x: hidden;

        @media only screen and (max-width: 720px) {
            grid-template-areas: 'BodyAccount';
            grid-template-columns: 1FR;
            grid-template-rows: 1FR;
        }
    `,

    StyledContainerLayoutMenuAccount = styled.main`
        grid-area: MenuAccount;

        @media only screen and (max-width: 720px) {
            display: none;
        
            position: absolute;
            top: 0;
            right: 0;

            margin: auto; 

            min-width: 100%;
            min-height: calc( 100vh - 6rem );
        }
    `,


    StyledContainerLayoutBodyAccount = styled.main`
        grid-area:BodyAccount;
        margin-left: 2rem;

        @media only screen and (max-width: 720px) {
            margin-left: 0rem;
            padding: 0rem 2rem;
        }
    `,
    StyledSectionLayoutBodyAccount = styled.section`
        padding : 2rem 0rem;

        width: 100%;
        height: auto;
        
        background-color: #FFFFFF;

        border-radius: 0.8rem;
    `
import styled, { css } from 'styled-components'
export const

    SyledContainerAccountPerfil = styled.main`
        min-width: 100%;
        justify-content: center;
    `,

    SyledContainerAccountPerfilInputs = styled.main`
        display: flex;

        margin: auto;

        max-width:  90%;
        min-width:  90%;
    `,

    SyledSectionAccountPerfilInputs = styled.section`
        display: grid;
        grid-template-areas: 'SyledSectionAccountPerfilInputsPersonalData''SyledSectionAccountPerfilInputsAddressData';
        grid-template-columns: 1FR;

        margin: auto;

        min-width: 100%;

        main:nth-child(3).ContainerDefaultButton {
            grid-column: 1 / span 2;

            display: flex;
            justify-content: space-around;

            width: 100%;
        }
    `,

    SyledSectionAccountPerfilInputsPersonalData = styled.section`
        grid-area: SyledSectionAccountPerfilInputsPersonalData;

        min-width: 100%;
        max-width: 100%;
    `,
    SyledSectionAccountPerfilInputsAddressData = styled.section`
        grid-area: SyledSectionAccountPerfilInputsAddressData; 

        min-width: 100%;
        max-width: 100%;
    `   
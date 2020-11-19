import styled, { css, keyframes } from 'styled-components'
export const

    StyledContainerCheckoutPageList = styled.main`
    
    `,

    StyledSectionTextAndLabelSelect = styled.section`
        margin: auto;

        display: flex; 
        flex-direction: row; 
        justify-content: space-between;

        width: 90%; 
    `,

    StyledSectionNavigatioInterface = styled.nav`
        display: flex;
        align-items: center;

        margin: auto;

        width: 86%;
        height: 4rem;
    `,
    StyledSectionNavigationBar = styled(StyledSectionNavigatioInterface)`
        
    `,
    StyledSectionNavigationBarItem = styled.span`
        font-size: 1.4rem;
        color: ${props => props.selected ? props.theme.colors.grayQuaternary : props.theme.colors.grayTertiary};

        cursor: pointer;

        &:not(:last-of-type)::after {
            content: ' >';
        }

        @media only screen and (max-width: 760px) {
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 720px) {
            font-size: 1rem;
        }
        @media only screen and (max-width: 360px) {
            font-size: 0.9rem;
        }
    `,
    StyledSectionNavigationButton = styled(StyledSectionNavigatioInterface)`
        justify-content: flex-end;   
        height: 5rem;
    `,
    StyledSpinnerkeyFrame = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `,
    StyledSpinner = styled.span`
        i {
            animation: ${StyledSpinnerkeyFrame} 2s ease-in-out infinite;
        }
    `,

    StyledContainerFreteOptions = styled.main`
        width: 100%;

        section {
            margin-bottom: 2rem;

            background-color: rgba(204,204,204,0.2);
            border-radius: 0.8rem;
        }
    `,

    StyledContainerFreteOption = styled.section`
        display: flex;
        align-items: center;

        height: 6rem;

        ${props => props.selected &&
            css`
                background-color: rgba(204,204,204,0.6);
            `
        }
        
        span:not(:first-of-type) {
            display: flex;
            flex: 1;
            justify-content: center;

            font-size: 1.4rem;
            color: ${props => props.theme.colors.grayTertiary};

            ${props => props.selected &&
            css`
                    color: ${props => props.theme.colors.grayTertiary};
                `
        }
        }
    `
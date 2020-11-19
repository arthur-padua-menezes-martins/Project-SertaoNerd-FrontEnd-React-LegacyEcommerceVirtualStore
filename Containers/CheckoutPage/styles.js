import styled, { css } from 'styled-components'
export const

    StyledContainerCheckoutPage = styled.main`
        display: grid;
        grid-template-areas:'StyledContainerCheckoutPageLeft StyledContainerCheckoutPageRight';
        grid-template-columns:0.6FR 0.4FR;

        margin-top: 6rem;

        height: calc(100vh - 6rem);

        @media only screen and (max-width: 720px) {
            margin-top: 0rem;
        }
        @media only screen and (max-width: 719px) {
            margin-top: 0rem;

            height: 100%;

            grid-template-areas:'StyledContainerCheckoutPageClickToOpenPageRight' 'StyledContainerCheckoutPageRight' 'StyledContainerCheckoutPageLeft';
            grid-template-columns:1FR;
        }
    `,

    StyledContainerCheckoutPageLeft = styled.main`
        grid-area: StyledContainerCheckoutPageLeft;

        padding: 4rem;

        @media only screen and (max-width: 719px) {
            padding: 1rem;
            margin-bottom: 6rem;
        }
    `,

    StyledContainerCheckoutPageRight = styled.main`
        grid-area: StyledContainerCheckoutPageRight;

        display: ${props => props.open ? '' : 'none'};

        padding: 4rem 2rem;

        background-color: rgba(250,250,250,0.8);

        border-left: 0.1rem rgb(230,230,230) solid;

        @media only screen and (max-width: 719px) {
            padding: 2rem 4rem;

            border-left: 0;
            border-bottom: 0.1rem rgb(230,230,230) solid;
        }
    `,
    StyledContainerCheckoutPageClickToOpenPageRight = styled.section`
        display: none;

        @media only screen and (max-width: 719px) {
            grid-area: StyledContainerCheckoutPageClickToOpenPageRight;

            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 2rem;

            height: 6rem;

            font-size: 1.4rem;

            box-shadow: 0rem 0rem 0.6rem rgba(153,153,153,0.6);
        }
    `,

    StyledSpanClickToOpenPageRight = styled.span`
    color: ${props => props.theme.colors.grayTertiary};
    font-weight: 600;
    
    span {
        margin-right: 1.2rem;

        @media only screen and (max-width: 400px) { 
            font-size: 1.2rem;
        }
    }

        ${props => props.value &&
            css`
                margin-right: 0rem;

                font-size: 1.8rem;

                @media only screen and (max-width: 400px) {
                    font-size: 1.6rem;
                }
            `
        }
    `
import styled, { css } from 'styled-components'
export const

    StyledSubHeader = styled.main`

        display: grid;

        position: relative;
        
        margin-top: 6rem;

        width: 100%;
        min-height: 4rem;
        max-height: 4rem;
        
        background-color: ${props => props.theme.colors.tertiary};

        z-index: 3;

        section {
            display: grid;
            grid-template-columns: repeat(5, 1fr);

            justify-content: center;
            align-items: center;

            width: 100%;
            
            letter-spacing: 0.15rem;
            font-size: 1.5rem;
            font-weight: 700;
            color: #FFFFFF;

            @media only screen and (max-width: 900px) { font-size: 1.4rem; }
            @media only screen and (max-width: 850px) { font-size: 1.35rem; letter-spacing: 0.1rem; }
            @media only screen and (max-width: 800px) { font-size: 1.3rem; }
            @media only screen and (max-width: 720px) { overflow-x: scroll; overflow-y: hidden;}
            
            p {
                display: flex;
                justify-content: center;
                align-items: center;

                min-height: 4rem;

                cursor: pointer;
            }
            span {
                width: auto;
                height: auto;
            }
        }

    `,

    StyledSectionSubHeader = styled.section`

        position: absolute;
        top: 4rem;
        left: 0rem;
        
        width: 100%;
        min-height: 36rem;
        max-height: 36rem;

        background-color: ${props => props.theme.colors.tertiary};

        opacity: 0;
        pointer-events: none;
        transition-property: opacity;
        transition-duration: 0.4s;

        ${props => props.selected && 
            css`
                opacity: 1;
                pointer-events: all;
            `
        }
        
    `
import styled, { css } from 'styled-components'
export const

    StyledFooter = styled.footer `
        display:flex;
        flex-direction: column;

        width: 100%;
        min-height: 38rem;

        font-size: 1.6rem;
        color: #FFFFFF;
    `,

    StyledFooterTop = styled.section `
        display: flex;
        align-items: center;

        min-height: 6rem;

        background-color: ${props => props.theme.colors.secondary};

        @media only screen and (max-width: 800px) {
            min-height: 8rem;  
        }
    `,
    StyledArticleFooterTop = styled.article `
        display: grid;
        grid-template-areas: 'TopMessage TopSocialNetwork';
        grid-template-columns: 1FR 0.5FR;
        
        margin: auto;
        
        width: 100%;

        @media only screen and (max-width: 800px) {
            grid-template-areas: 'TopMessage' 'TopSocialNetwork';
            grid-template-columns: 1FR;
            grid-template-rows: 4rem 4rem;
        }

        @media only screen and (max-width: 411px) {
            grid-template-rows: 5rem 3rem;
        }
    `,
    InterfaceDivTop = styled.div `
        display: flex;
        align-items: center;

        margin: 0rem 2rem;

        @media only screen and (max-width: 800px) {
            justify-content: center;
        }
    `,
    StyledTopMessage = styled(InterfaceDivTop)
`
        grid-area: TopMessage;
            
        justify-content: flex-start;

        text-align: center;
    `,
StyledTopSocialNetwork = styled(InterfaceDivTop)
`
        grid-area: TopSocialNetwork;

        justify-content: flex-end;
    
        img {
            margin: 0rem 1rem;
            min-width: 2rem;
            min-height: 2rem;
            max-height: 2rem;
        }
    `,

StyledFooterMiddle = styled.section `
        min-height: 27rem;

        background-color: #1C2331;
    `,
    StyledArticleFooterMiddle = styled.article `
        display: grid;
        grid-template-areas: 'StyledMiddleAbout StyledMiddleMyAccount StyledMiddleContactUs';
        grid-template-columns: 1FR 1FR 1FR;

        justify-content: space-around;
        align-items: center;

        width: 100%;
        height: 100%;
        min-height: 27rem; 

        @media only screen and (max-width: 800px) {
            grid-template-areas: 'StyledMiddleAbout' 'StyledMiddleMyAccount' 'StyledMiddleContactUs';
            grid-template-columns: 1FR;
            min-height: 64rem; 
        }
    `,
    InterfaceDivMiddle = styled.div `
        display: flex;

        min-height: 24rem;

        ul li {
            margin: 2rem;
        }
        ul li img {
            min-height: 1.4rem;
            max-height: 1.4rem;
            min-width: 3rem;
            max-width: 3rem;
        }
        ul li {
            text-align: left;
            font-size: 1.4rem;
        }

        & > ul > li span {
            position: relative;

            font-size: 2.2rem;
        }
        & > ul > li span::before {
            content: ' ';

            position: absolute;
            top: -0.2rem;

            width: 100%;

            border-top: 0.2rem ${props => props.theme.colors.primary} solid;
        }  
        & ul:last-child li a:hover {
            color: #CCCCCC;
        }   
        
        @media only screen and (max-width: 800px) {
            justify-content: center;
            align-items: center;
            
            ul li {
                text-align: center;
            }
        }
    `,
    StyledMiddleAbout = styled(InterfaceDivMiddle)
`
        grid-area: StyledMiddleAbout;
    `,
StyledMiddleMyAccount = styled(InterfaceDivMiddle)
`
        grid-area: StyledMiddleMyAccount;
`,
StyledMiddleContactUs = styled(InterfaceDivMiddle)
`
        grid-area: StyledMiddleContactUs;
    `,

StyledFooterBottom = styled.section `
        display: flex;
        align-items: center;

        min-height: 5rem;

        background-color: #161C27;
    `,
    StyledArticleFooterBottom = styled.article `
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;

        span {
            font-size: 1.2rem;
            margin: 0rem 2rem;
        }
        span:first-child {
            color: ${props => props.theme.colors.graySecondary};
        }
    `
import styled from 'styled-components'
export const

    StyledHeader = styled.main`
        display: grid;
        grid-auto-flow: column;

        position: fixed;
        top: 0;

        justify-content: space-around;  
        align-items: center;

        width: 100%;
        
        background: ${props => props.theme.colors.primary};

        box-shadow: 0rem 0rem 0.6rem rgba(0,0,0,0.04);

        z-index: 4;

        @media only screen and (min-width: 720px) {
            min-height: 6rem;
            max-height: 6rem;
        }

        @media only screen and (max-width: 720px) {
            position: static;
            
            min-height: 4rem;
            max-height: 4rem;
        }
    `,
    StyledHeaderDefault = styled(StyledHeader)`
        @media only screen and (min-width: 720px) {
            grid-template-areas:'HeaderLogo HeaderSearch HeaderCart';
            grid-template-columns: 0.5FR 1FR 0.5FR;       
        }

        @media only screen and (max-width: 720px) {

            grid-template-areas:'HeaderLogo';
            grid-template-columns: 1FR;  

        }
    `,
    StyledHeaderSimple = styled(StyledHeader)`
        grid-template-areas:'HeaderLogo';
        grid-template-columns: 1FR;  
    `,

    StyledHeaderAccount = styled(StyledHeader)`
        grid-template-areas:'HeaderLogo HeaderAccount';
        grid-template-columns: 1FR 1FR;
    `,


    StyledHeaderDefaultMobile = styled.main`
        display: grid;
        grid-template-areas:'MobileHeaderProfile MobileHeaderCategories MobileHeaderCart MobileHeaderSearch';
        grid-template-columns: 1FR 1FR 1FR 1FR;  

        position: fixed;
        bottom: 0;
        left: 0;
    
        min-width: 100%;
        max-width: 100%;
        min-height: 6rem;
        max-height: 6rem;

        background-color: #FFFFFF;

        color: rgba(255,75,0,0.4);

        box-shadow: 0rem -0.2rem 0.6rem rgba(0,0,0,0.04);

        z-index: 5;
    `

    
import styled, { css } from 'styled-components'
export const

    StyledSectionHeaderSearch = styled.section`
        display: grid;
        grid-area: HeaderSearch;

        min-width: 100%;
        max-width: 100%;
    `,

    StyledDivHeaderSearch = styled.section`
        position: relative;
        
        display: flex;

        flex-direction: column;
        justify-content: center;

        min-height: 4rem;

        align-items: center;
    `,


    StyledInputSearchDesktop = styled.input`
        box-sizing: border-box;  
        
        padding: 0px 20px 0px 20px;

        justify-content: center;

        width: 100%;        
        min-height: 4rem;

        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing:0.06rem;
        color: ${props => props.theme.colors.grayQuaternary};

        border-radius: 0.4rem;
        cursor: default;

        &::placeholder {
            font-size: 1.4rem;
            font-weight: 500;
            color: ${props => props.theme.colors.grayTertiary};
        }
    `,


    StyledButton = styled.button`
        max-width: 2rem;
        height:100%;

        font-size:1.6rem;
        color: ${props => props.theme.colors.primary};

        background: transparent; 
    `,


    StyledButtonSearchDesktop = styled(StyledButton)`

        cursor: pointer;

        &:hover {
            div {
                background-color: rgba(204,204,204,0.6);
            }
        }

        div {
            display: flex;
            position: absolute;
            
            justify-content: center;
            align-items: center;    

            top: 0.5rem;
            right: 1rem;

            width: 2.8rem;
            height: 2.8rem;
            
            border-radius: 50%;

            img {
                max-height: 1.8rem;
            }
        }
    `,

/*mobile************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

    StyledButtonMobile = styled(StyledButton)`
        position: relative;
        display: flex;

        color: white;

        font-size: 2rem;
    `,


    StyledSectionContainerForMobileButtons = styled.section`
        display: grid;
        grid-template-areas:'StyledButtonLateralMenuMobile StyledButtonOpenInputMobile';

        width: 80%;

        justify-content: space-around;
    `,

    StyledButtonLateralMenuMobile = styled(StyledButtonMobile)`
        grid-area: StyledButtonLateralMenuMobile;
    `,

    StyledButtonOpenInputMobile = styled(StyledButtonMobile)`
        grid-area: StyledButtonOpenInputMobile;
    `,


    StyledSectionContainerForMobileInput = styled.section`
        grid-area: StyledSectionContainerForMobileInput;

        width: 100%;
        height: 100%;
    `,

    StyledInputSearchMobile = styled.input`
    
    `,

    StyledSectionHeaderContainerMobile = styled.section`     
        display: grid;
        grid-area: MobileHeaderSearch;

        div {
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;

            span {  
                font-size: 1.2rem;
                font-weight: 700;

                img {
                    min-width: 1.8rem;
                    max-width: 1.8rem;
                    min-height: 1.8rem;
                    max-height: 1.8rem;
                }
            }  
        }

    `


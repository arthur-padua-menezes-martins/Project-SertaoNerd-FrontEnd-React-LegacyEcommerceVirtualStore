import styled, { css } from 'styled-components'
export const
    StyledSectionHeaderContainerMobile = styled.section`
    
        display: grid;
        grid-area: MobileHeaderProfile;

    div {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        span {  
            font-size: 1.2rem;
            font-weight: 700;

            i {
            font-size: 1.8rem;
            margin-bottom: 0.4rem;
            } 

            img {
                min-width: 1.8rem;
                max-width: 1.8rem;
                min-height: 1.8rem;
                max-height: 1.8rem;
            }
        }  
    }

    `
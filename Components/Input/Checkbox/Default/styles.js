import styled, { css } from 'styled-components'
export const

    StyledContainerDefaultCheckbox = styled.span`
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0 !important;
        
        min-width: 4rem;

        input {
            position: relative;

            width: 2.4rem;
            height: 2.4rem;
            
            background-color: #c6c6c6;

            outline: none;

            border-radius: 2rem;

            box-shadow: inset 0 0 0.5rem rgba(0,0,0,0.1);

            appearance: none;
            -webkit-appearance: none;

            transition: 0.6s;

            cursor: pointer;
            
            &:checked {
                background-color: ${props => props.theme.colors.primary};
            }

            &::before {
                content: '';

                position: absolute;
                top: 15%;
                left: 15%;

                width: 1.6rem;
                height: 1.6rem;

                background-color: #FFFFFF;

                box-shadow: 0 0.2rem 0.5rem rgba(0,0,0,0.1);

                border-radius: 50%;

                transform: scale(1.1);
                transition: 0.6s;
            }
        }
    `
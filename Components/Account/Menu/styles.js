import styled, { css } from 'styled-components'
export const

    StyledContainerMenuAccount = styled.article`
        margin: auto;

        min-width: ${props => props.containerWidth};
        height: 100%;
    `,

    StyledSectionMenuAccount = styled.section`
        min-width: inherit;
        min-height: ${props => `${props.maxHeight * 5}rem`};
        max-height: ${props => `${props.maxHeight * 5}rem`};

        ${props => {
            switch (props.selected) {

                case 'perfil':
                    return css` 
                        span:nth-child(1) { 
                            section {
                                    div:last-child { 
                                    background-color: ${props => props.theme.colors.primary}; border-bottom-color: ${props => props.theme.colors.tertiary}; border-right-color: ${props => props.theme.colors.tertiary}; color: #FFFFFF; 
                                }
                                    div {
                                        border-color: ${props => props.theme.colors.tertiary} !important;
                                }
                            }
                        } `
                    break

                case 'request':
                    return css` 
                        span:nth-child(2) { 
                            section {
                                div:last-child { 
                                    background-color: ${props => props.theme.colors.primary}; border-bottom-color: ${props => props.theme.colors.tertiary}; border-right-color: ${props => props.theme.colors.tertiary}; color: #FFFFFF; 
                                }
                                div {
                                    border-color: ${props => props.theme.colors.tertiary} !important;
                                }
                            }
                        } `
                    break
            }
        }}
    `,
    StyledSectionMenuAccountRow = styled.section`
        display: flex;

        min-width: inherit;
        min-height: 4rem;
        max-height: 4rem;      

        cursor: pointer;

        &:hover {
            div:last-child {
                color: #FFFFFF;

                background-color: ${props => props.theme.colors.primary};
            }
            div {
                border-color: ${props => props.theme.colors.tertiary} !important;
            }
        }

        div:first-child {
            min-width: 4rem;
            max-width: 4rem;

            
        }
        div:last-child {
            justify-content: left;

            padding: 1rem;

            width: 100%;

            font-size: 1.6rem;
            font-weight: 500;
        }
    `,
    StyledDivMenuAccountData = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme.colors.grayTertiary};

        background-color: #FFFFFF;
        
        border-top: 0.1rem rgba(204,204,204,0.2) solid;
        border-bottom: 0.1rem rgba(204,204,204,0.2) solid;
        border-right: 0.1rem rgba(204,204,204,0.2) solid;
        border-left: 0.1rem rgba(204,204,204,0.2) solid;

        transition-property: background-color, border;
        transition-duration: 0.2s;

        img {
            min-width: 2rem;
            max-width: 2rem;
            min-height: 2rem;
            max-height: 2rem;
        }
    `
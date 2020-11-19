/*display************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import styled, { css } from 'styled-components'
export const

    StyledContainerProductPage = styled.section`
        display: grid;
        grid-template-areas: 'StyledProductPageImageList StyledProductPageFeaturedImage StyledProductPageDetails';
        grid-template-columns: 1FR 3FR 3FR;

        margin: 4rem auto;

        @media only screen and (min-width: 900px) {
            min-width: 80rem;
            max-width: 80rem;
        }

        @media only screen and (min-width: 1200px) {
            min-width: 110rem;
            max-width: 110rem;
        }

        @media only screen and (max-width: 899px) {

            grid-template-areas:'StyledProductPageFeaturedImage' 'StyledProductPageDetails';
            grid-template-columns: 1FR;
        }

        @media only screen and (max-width: 720px)  {
            justify-content: center;
        }
        
    `,

    StyledContainerProductPageImageList = styled.section`
    
        display: flex;
        grid-area: StyledProductPageImageList;

        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    `,

    StyledArticleProductPageImageList = styled.article`

        display: flex;
        
        margin-bottom: 1rem;

        justify-content: center;
        align-items: center;

        width: 10rem;
        height: 10rem;

        ${props => props.thisSelectedImage ?
            css`border: 0.2rem ${props.theme.colors.primary} dashed;` :
            css`border: 0.15rem ${props.theme.colors.grayPrimary} dashed;`
        }
        border-radius: 50%;

        overflow: hidden;

        &:hover {
            ${props => !props.thisSelectedImage &&
            css`border: 0.2rem ${props => props.theme.colors.primary} dashed;`
        }
        }

        img {
            transform: scale(1);

            cursor: pointer;

            transition: transform 0.4s;

            &:hover {
                transform: scale(1.2);
            }
        }
    `,


    StyledContainerProductPageFeaturedImage = styled.section`
    
        grid-area: StyledProductPageFeaturedImage;

        display: flex;

        article {
            display: flex;

            justify-content: center;
            align-items: center;

            width: 100%;

            margin: auto 0rem;

            @media only screen and (max-width: 899px) {
                margin: auto;

                max-width: 50rem;

                img {
                    max-width: 50rem;
                }
            }

            @media only screen and (max-width: 719px) {

                max-width: 40rem;

                img {
                    max-width: 36rem;
                }
            }

            @media only screen and (max-width: 439px) {

                min-width: 80%;
                max-width: 80%;

                img {
                    max-width: 100%;
                }
            }
        }

   
    `,

    StyledArticleProductPageFeaturedImage = styled.article`
        grid-area: StyledProductPageDetails;

        img {
            width: 100%;
        }

        @media only screen and (max-width: 899px) { 
            min-width: 50rem; 
        }
        @media only screen and (max-width: 719px) { 
            min-width: 40rem; 
        }
        @media only screen and (max-width: 439px) {
            min-width: 80%;
            max-width: 80%;
        }
    `,


    StyledContainerProductPageDetails = styled.section`

        main {
            margin: 2rem auto;
        }

        main:nth-child(1) {
            margin-bottom: 0rem;
        }
        main:nth-child(2) {
            margin-top: 0rem;
        }

        @media only screen and (max-width: 899px) {
            margin: auto;

            min-width: 50rem;
            max-width: 50rem;
        }

        @media only screen and (max-width: 719px) {
            margin: auto;

            min-width: 36rem;
            max-width: 36rem;
        }
        @media only screen and (max-width: 439px) {
            min-width: 80%;
            max-width: 80%;
        }


    `,

    StyledContainerOthersPageDetails = styled.main`
    
        display: grid; 
        grid-template-areas:'StyledOthersAssessments';
        grid-template-columns:1FR;
        grid-template-rows: 2rem;

        align-items: center;
        color: ${props => props.theme.colors.primary};
    `,


    StyledOthersInterface = styled.div`
        display: flex;
        justify-content: center;

        min-width: 10rem;

        font-size: 1.2rem;

        span {
            font-weight: 400;
            color: ${props => props.theme.colors.grayPrimary};
        }
    `,
    StyledOthersAssessments = styled(StyledOthersInterface)`
        grid-area: StyledOthersAssessments;

        justify-content: normal;          

        span:nth-child(1) {
            color: ${props => props.theme.colors.primary};
        }
        span:nth-child(2) {
            color: rgba(255,75,0,0.4);
        }
    `,
    StyledOthersReference = styled(StyledOthersInterface)`
        grid-area: StyledOthersReference;
    `,
    StyledOthersCreatedAt = styled(StyledOthersInterface)`
        grid-area: StyledOthersCreatedAt;
    `,


    StyledContainerTitlePageDetails = styled.main`
        display: flex;

        margin: auto;

        align-items: center;

        width: 100%;

        min-height: 4rem;
        max-height: 4rem;

        font-size: 1.8rem;
        font-weight: 600;

        span {
            display: flex;
            align-items : center;

            min-height: inherit;

            color: ${props => props.theme.colors.grayTertiary};
        }
    `,


    StyledContainerValuePageDetails = styled.main`
    position: relative;

    display: flex;
    justify-content: center;

    margin: auto;

    width: 100%;

    span {
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 6rem;
    }      
    span:nth-child(1) {
        font-size: 4.6rem;
        font-weight: 700;
        color: ${props => props.theme.colors.grayQuaternary};
    }
    span:nth-child(2) {
        padding: 1.4rem;

        max-height: 2rem;

        font-size: 1.4rem;
        font-weight: 500;
        color: #FFFFFF;

        background-color: #4bbd8d;

        border-radius: 0.4rem;
    }
    span:nth-child(3) {
        position: absolute;
        top: 4rem;
        padding: 1rem;

        font-size: 1.6rem;
        color: ${props => props.theme.colors.grayPrimary};

        pointer-events: none;
    }

    @media only screen and (max-width: 1200px) { 
        span {
            padding: 0.6rem;
        }
        span:nth-child(2) {
            padding: 1.2rem;

            font-size: 1.2rem;
        }
    }
    @media only screen and (max-width: 900px) { 
        span:nth-child(2) {
            padding: 1.1rem;

            font-size: 1.1rem;
        }
    }
    @media only screen and (max-width: 400px) { 
        span:nth-child(1) {
            font-size: 3.8rem;
        }
        span:nth-child(2) {
            padding: 1rem;

            font-size: 1rem;
        }
        span:nth-child(3) {
            font-size: 1.3rem;
        }
    }

    `,


    StyledContainerVariationsPageDetails = styled.main`
    
    section {
        display: flex;

        flex-direction: column;

        margin: auto;

        width: 90%;
        section {
            margin: 0;
            width: auto;
        }
    }

    article {
        border-top: 1px rgba(255,75,0,0.2) solid;
    }
    
    `,

    /*info************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    StyledContainerProductPageSelectInformation = styled.main`

        margin: 4rem auto;

        border-bottom: 0.2rem ${props => props.theme.colors.primary} solid;

        header {
            margin: 0rem 25%;
            section {
                display: flex;
                justify-content: center;
            }
        }   
    `,

    StyledContainerProductPageSelectOption = styled.span`
        margin-right: 2rem;

        font-size: 1.4rem;
        font-weight: 700;

        cursor: pointer;

        ${props => true === props.thisSelect ?
            css`
                color: ${props => props.theme.colors.grayQuaternary};
                border-top: 0.2rem ${props => props.theme.colors.primary} solid;
            `:
            css`    
                color: ${props => props.theme.colors.graySecondary};
                border-top: 0.2rem ${props => props.theme.colors.graySecondary} solid;
            `
        }

        @media only screen and (max-width: 720px) {
            margin-right: 1.6rem;
        }

        @media only screen and (max-width: 500px) {
            margin-right: 0.8rem;

            font-size: 1.2rem;
        }
        @media only screen and (max-width: 400px) {
            margin-right: 0.4rem;

            font-size: 1rem;
        }
    `,


    StyledSelectInterface = styled.main`
    
        section {
            margin: 4rem;
        }

    `,
    StyledSelectDescription = styled(StyledSelectInterface)`
    `,

    StyledSelectAdditionalInformations = styled(StyledSelectInterface)`
    `,


    StyledSelectAssessments = styled(StyledSelectInterface)`

    `
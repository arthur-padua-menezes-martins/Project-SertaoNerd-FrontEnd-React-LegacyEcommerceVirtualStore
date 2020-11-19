/* basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState, useEffect } from 'react'
import Router from 'next/router'

/* redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index.js'

/* components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import ButtonAmountProduct from '../../../Components/Button/Amount/product.js'
import ButtonCep from '../../../Components/Button/Cep/index.js'
import DefaultButton from '../../../Components/Button/Default/index.js'
import ContainerDefaultButton from '../../../Components/Button/Default/container.js'

/* styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
  StyledContainerProductPage,

  StyledContainerProductPageImageList,
  StyledArticleProductPageImageList,

  StyledContainerProductPageFeaturedImage,
  StyledArticleProductPageFeaturedImage,

  StyledContainerProductPageDetails,
  StyledContainerTitlePageDetails,
  StyledContainerOthersPageDetails,
  StyledOthersAssessments,
  StyledOthersReference,
  StyledOthersCreatedAt,
  StyledContainerValuePageDetails,

  StyledContainerVariationsPageDetails
} from './styles.js'

/* helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { addCart } from '../../../helpers/cart.js'

/* main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function ProductPageDisplay (props) {
  /* props************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  var
    [listOfVarations, setListOfVariations] = useState([
      ...props.informations.variations.map((variation, index) => (
        { type: variation.code, selected: index === props.selectedVariation }
      ))
    ])
  var [selectedImageSource, setSelectedImageSource] = useState(props.informations.variations[props.selectedVariation].images[0])
  var [selectedImageIndex, setSelectedImageIndex] = useState(0)
  var [quantity, setQuantity] = useState(1)

  /* hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  useEffect(() => {
    setSelectedImageSource(props.informations.variations[props.selectedVariation].images[0])
  }, [props.selectedVariation])

  /* return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  try {
    return (
      <StyledContainerProductPage>

        <>
          {window.innerWidth >= 900 && (
            <StyledContainerProductPageImageList>
              {
                props.informations.variations[props.selectedVariation].images.map((image, index) => (

                  <StyledArticleProductPageImageList key={index}
                    onClick={() => {
                      setSelectedImageSource(props.informations.variations[props.selectedVariation].images[index])
                      setSelectedImageIndex(index)
                    }}
                    thisSelectedImage={index === selectedImageIndex} >

                    <img src={image} />

                  </StyledArticleProductPageImageList>

                ))
              }
            </StyledContainerProductPageImageList>)
          }

          <StyledContainerProductPageFeaturedImage>

            <StyledArticleProductPageFeaturedImage>
              <img src={selectedImageSource} />
            </StyledArticleProductPageFeaturedImage>

          </StyledContainerProductPageFeaturedImage>
        </>

        <StyledContainerProductPageDetails>

          <StyledContainerTitlePageDetails>
            <span>{props.informations.variations[props.selectedVariation].title}</span>
          </StyledContainerTitlePageDetails>

          <StyledContainerOthersPageDetails>

            <StyledOthersAssessments>
              <span>
                {Array(4).fill(<i class="fas fa-star"></i>)}
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </StyledOthersAssessments>

          </StyledContainerOthersPageDetails>

          <StyledContainerValuePageDetails>
            <span>R$ {props.informations.variations[props.selectedVariation].value}</span>
            <span>{(100 - (Number(props.informations.variations[props.selectedVariation].value) * 100 / Number(props.informations.variations[props.selectedVariation].defaultValue))).toFixed(2)}%&nbsp;&nbsp;OFF</span>
            <span>em 2x de R$ {(props.informations.variations[props.selectedVariation].value) / 2} sem juros</span>
          </StyledContainerValuePageDetails>

          <ContainerDefaultButton>

            <ButtonAmountProduct
              onClick={newQuantity => setQuantity(newQuantity)}
              amount={quantity}
              justifyContent={'flex-end'} containerWidth={'85%'} border={false}>
            </ButtonAmountProduct>

          </ContainerDefaultButton>

          <ContainerDefaultButton containerWidth={window.innerWidth < 800 && '100%'} flexDirection={'column'} >

            <DefaultButton
              onClick={() => {
                addToCart()
              }}
              margin={'0rem 0rem 2rem 0rem'} containerWidth={'100%'} width={window.innerWidth < 800 ? '100%' : '80%'} height={5} size={1.4} weight={600} borderWidth={0.1} borderRadius={0} color={'rgba(255,75,0,1)'} backgroundColor={'rgba(255,75,0,0.15)'} icon={<i class="fa fa-shopping-cart"></i>}>

                            adicionar ao carrinho

            </DefaultButton>

            <DefaultButton
              onClick={() => {
                addToCart()
                Router.push({ pathname: '/cart' })
              }}
              containerWidth={'100%'} width={window.innerWidth < 800 ? '100%' : '80%'} height={5} size={1.4} weight={600} borderRadius={0} color={'rgba(255,255,255,1)'} backgroundColor={'rgba(255,75,0,1)'} hoverBackgroundColor={'rgba(255,75,0,0.9)'}>

                            comprar agora

            </DefaultButton>

          </ContainerDefaultButton>

          <StyledContainerVariationsPageDetails>
            {
              true && (
                <article>

                  <ContainerDefaultButton style={{ flexDirection: 'row' }}>
                    {
                      listOfVarations.map((variation, index) => (
                        <DefaultButton
                          onClick={() => {
                            props.setSelectedVariation(index)
                            setListOfVariations([
                              ...props.informations.variations.map((variation, idx) => (
                                { type: variation.code, selected: idx === index }
                              ))
                            ])
                          }}
                          selected={variation.selected} containerWidth={20} width={4} height={4} size={1.2} weight={600} borderWidth={0.1} borderRadius={2} color={'rgba(255,75,0,1)'} backgroundColor={'transparent'}
                        >
                          {variation.type}
                        </DefaultButton>
                      ))
                    }
                  </ContainerDefaultButton>

                </article>
              )
            }
          </StyledContainerVariationsPageDetails>

        </StyledContainerProductPageDetails>

      </StyledContainerProductPage>
    )
  } catch (error) {
    return (<></>)
  }

  /* functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  function addToCart () {
    if (props.login.authentication.authenticated === true) {
      addCart({
        products: props.informations,
        variations: props.informations.variations[props.selectedVariation],
        quantity: quantity,
        unitaryValue: props.informations.variations[props.selectedVariation].value,
        user_id: props.login.authentication.user_id
      })
    } else {
      alert('realize o login antes de adicionar itens ao carrinho')
    }
  }
}

const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps, actions)(ProductPageDisplay)

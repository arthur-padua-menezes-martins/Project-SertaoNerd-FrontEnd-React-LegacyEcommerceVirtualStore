/* basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'

/* components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import ProductPageDisplay from '../../Components/List/ProductPage/display.js'
import ProductPageInfo from '../../Components/List/ProductPage/info.js'
import HomePageProducts from '../../Containers/List/HomePageProducts/index.js'

/* styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledContainerProductPageDisplay, StyledContainerProductPageInfo } from './styles.js'

/* main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function ProductPage (props) {
  /* state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  var [selectedVariation, setSelectedVariation] = useState(0)

  /* return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  return (
    <>
      <StyledContainerProductPageDisplay>

        <ProductPageDisplay
          informations={props.informations.Product}
          selectedVariation={selectedVariation}
          setSelectedVariation={setSelectedVariation}
        />

      </StyledContainerProductPageDisplay>

      <StyledContainerProductPageInfo>

        <ProductPageInfo
          informations={props.informations.Product.variations}
          description={props.informations.Product.description}
          selectedVariation={selectedVariation}
        />

      </StyledContainerProductPageInfo>

      <>
        <HomePageProducts
          names={[props.informations.Product.categories.name]}
          types={props.informations.Product.type}
          collections={props.informations.Product.collections}
          related={true}
        />
      </>
    </>
  )
}
export default ProductPage

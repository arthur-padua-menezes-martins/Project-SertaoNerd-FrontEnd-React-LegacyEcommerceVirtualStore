/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useEffect } from 'react'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import Product from '../../Item/Product/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledSectionProducts } from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import listHelpers from '../../../helpers/components/list/index.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function Products(props) {

    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var { Products } = props || { Products: [] }




    /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    useEffect(function setEventListener() {
        var
            ElementStyledSectionProducts = document.getElementById('StyledSectionProducts'),
            eventMousedownPosition = null,
            translateMouseupPosition = null

        ElementStyledSectionProducts.addEventListener('mousedown', mousedownSectionProducts, true)
        ElementStyledSectionProducts.addEventListener('mouseup', mouseupSectionProducts, true)
        ElementStyledSectionProducts.addEventListener('mousemove', () => mousemoveSectionProducts(eventMousedownPosition), true)

        function mousedownSectionProducts() {
            ElementStyledSectionProducts.style.transition = 'transform 0s'
            eventMousedownPosition = event.clientX
        }
        function mousemoveSectionProducts(eventMousedownPosition) {

            if (eventMousedownPosition) {

                var eventMousemovePosition = event.clientX

                if (translateMouseupPosition !== null) {
                    ElementStyledSectionProducts.style.transform = `translate(${Number(translateMouseupPosition) + (eventMousemovePosition - eventMousedownPosition)}px)`
                } else {
                    ElementStyledSectionProducts.style.transform = `translate(${eventMousemovePosition - eventMousedownPosition}px)`
                }
            }

        }
        function mouseupSectionProducts() {

            var
                productsShowcasePosition = (event.target.offsetParent.style.transform.replace(/[^0-9-]+/, '')).replace('px)', ''),
                normalizationOfPositionX = listHelpers.validateSectionProductsPosition(window.innerWidth, productsShowcasePosition, ElementStyledSectionProducts.childNodes.length)

            ElementStyledSectionProducts.style.transition = 'transform 1s'

            if (normalizationOfPositionX !== null) {
                ElementStyledSectionProducts.style.transform = `translate(${normalizationOfPositionX}px)`
                translateMouseupPosition = normalizationOfPositionX
            } else {
                ElementStyledSectionProducts.style.transform = `translate(${productsShowcasePosition}px)`
                translateMouseupPosition = productsShowcasePosition
            }

            normalizationOfPositionX = null
            eventMousedownPosition = null

        }

        return function unMount() {
            ElementStyledSectionProducts.removeEventListener('mousedown', mousedownSectionProducts)
            ElementStyledSectionProducts.removeEventListener('mouseup', mouseupSectionProducts)
            ElementStyledSectionProducts.removeEventListener('mousemove', mousemoveSectionProducts)
        }
    }, [])




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    return (
        <StyledSectionProducts id="StyledSectionProducts" productsLength={Products.length}>
            {
                Products.map((iterator, index) => (
                    <Product key={index}
                        Product={iterator}
                        reference={iterator.reference} />
                ))
            }
        </StyledSectionProducts>
    )
}
export default Products
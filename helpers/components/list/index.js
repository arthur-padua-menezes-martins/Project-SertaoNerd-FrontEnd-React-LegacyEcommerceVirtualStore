export default {

    validateSectionProductsPosition: (windowInnerWidth, productsShowcasePosition, productsShowcaseLength) => {
        var result = null, productsOnDisplay

        if (windowInnerWidth > 1000) productsOnDisplay = 4
        if (windowInnerWidth <= 1000) productsOnDisplay = 3
        if (windowInnerWidth <= 720) productsOnDisplay = 3

        var
            productsWidth = -250,
            DisplayShowcaseWidth = productsShowcasePosition * productsOnDisplay,
            CompeleteShowcaseWidth = productsShowcaseLength * productsWidth

        if (((DisplayShowcaseWidth - productsWidth) % productsWidth) !== 0) {

            for (let i = 0; i < productsShowcaseLength; i++) {
                if (
                    (Number(productsShowcasePosition) + productsWidth / 2) <= i * productsWidth && 
                    (Number(productsShowcasePosition) + productsWidth / 2) > (i + 1) * productsWidth
                ) {
                    result = i * productsWidth
                }
            }
            if(result <= productsShowcaseLength) {

            }
        }
        if (DisplayShowcaseWidth - productsWidth < CompeleteShowcaseWidth) {
            result = CompeleteShowcaseWidth + (productsWidth * productsOnDisplay) * -1
         }

        result = productsShowcasePosition > 0 ? 0 : result === (productsShowcaseLength - 3) * productsWidth ? result - productsWidth : result
        return result !== null ? String(result) : result
    }

}
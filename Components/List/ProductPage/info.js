/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import DefaultTable from '../../Table/Default/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledContainerProductPageSelectInformation, StyledContainerProductPageSelectOption,
    StyledSelectDescription, StyledSelectAdditionalInformations, StyledSelectAssessments
} from './styles.js'

function ProductPageInfo(props) {

    /*var's************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var productDetailInformation = [
        {
            'peso': `${props.informations[props.selectedVariation].deliveries.weight}kg`,
            'dimensões': `${props.informations[props.selectedVariation].deliveries.dimensions.height}cm x ${props.informations[props.selectedVariation].deliveries.dimensions.width}cm x ${props.informations[props.selectedVariation].deliveries.dimensions.length}cm`
        }
    ] || []




    /*state************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var [selected, setSelected] = useState({ description: true, aditionalInformations: false, assessments: false })




    /*render functions************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    function renderSelectDescription() {
        return (
            <StyledSelectDescription>

                <section>
                    {props.description}
                </section>

            </StyledSelectDescription>
        )
    }
    function renderSelectAdditionalInformation() {
        return (
            <StyledSelectAdditionalInformations>

                <section>
                    <DefaultTable informations={productDetailInformation} border={true} borderStyle={'dashed'} />
                </section>

            </StyledSelectAdditionalInformations>
        )
    }
    function renderSelectAssessments() {
        return (
            <StyledSelectAssessments>

                <section>
                    StyledSelectAssessments
                </section>

            </StyledSelectAssessments>
        )
    }




    /*return************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    try {

        return (

            <StyledContainerProductPageSelectInformation>

                <header>
                    <section>

                        <StyledContainerProductPageSelectOption
                            thisSelect={selected.description}
                            onClick={() => setSelected({ description: true, aditionalInformations: false, assessments: false })}>
                            DESCRIÇÃO
                        </StyledContainerProductPageSelectOption>

                        <StyledContainerProductPageSelectOption
                            thisSelect={selected.aditionalInformations}
                            onClick={() => setSelected({ description: false, aditionalInformations: true, assessments: false })}>
                            INFORMAÇÕES ADICIONAIS
                        </StyledContainerProductPageSelectOption>

                        <StyledContainerProductPageSelectOption
                            thisSelect={selected.assessments}
                            onClick={() => setSelected({ description: false, aditionalInformations: false, assessments: true })}>
                            AVALIAÇÕES
                        </StyledContainerProductPageSelectOption>

                    </section>
                </header>

                {selected.description && renderSelectDescription()}

                {selected.aditionalInformations && renderSelectAdditionalInformation()}

                {selected.assessments && renderSelectAssessments()}

            </StyledContainerProductPageSelectInformation>

        )

    } catch (error) {

        return (<></>)

    }
}
export default ProductPageInfo
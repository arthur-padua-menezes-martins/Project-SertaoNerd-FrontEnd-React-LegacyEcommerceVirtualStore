/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledTable, StyledTableBody,
    StyledTableRow, StyledTableData
} from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function DefaultTable({
    informations,
    keyTextAlign = 'center', keyFontSize = 1.6, keyFontWeight = 400,
    valueTextAlign = 'center', valueFontSize = 1.6, valueFontWeight = 600,
    border, borderTop, borderBottom, borderColor, borderStyle = 'solid'
}) {

    let result = ''

    if (typeof informations[0] !== 'undefined') {
        informations.map((row, index) => {
            result = (Object.keys(informations[index])).map(key => (

                <>
                    <StyledTableRow key={key}
                        keyTextAlign={keyTextAlign}
                        valueTextAlign={valueTextAlign}
                        border={border} borderColor={borderColor} borderStyle={borderStyle}>

                        <StyledTableData
                            keyFontSize={keyFontSize} keyFontWeight={keyFontWeight}>
                            {key}
                        </StyledTableData>

                        <StyledTableData
                            valueFontSize={valueFontSize} valueFontWeight={valueFontWeight}>
                            {informations[index][key]}
                        </StyledTableData>

                    </StyledTableRow>
                </>

            ))
        })
    }

    return (
        <StyledTable>

            <StyledTableBody borderTop={borderTop} borderBottom={borderBottom}>{result}</StyledTableBody>

        </StyledTable>
    )
}
export default DefaultTable
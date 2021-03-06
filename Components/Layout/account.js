/*components modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

import { StyledContainerLayoutAccount, StyledSectionLayoutAccount } from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function LayoutAccount({children}) {
    return (
        <StyledContainerLayoutAccount>
            <StyledSectionLayoutAccount>
                {children}
            </StyledSectionLayoutAccount>
        </StyledContainerLayoutAccount>
    )
}
export default LayoutAccount
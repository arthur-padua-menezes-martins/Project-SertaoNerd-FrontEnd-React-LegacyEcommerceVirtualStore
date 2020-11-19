import styled, { css } from 'styled-components'
export const

    StyledTable = styled.table`
    
        margin: auto;

        width: 100%;

        text-align: left;
    `,

    StyledTableBody = styled.tbody`
        border-top: ${props => props.borderTop};
        border-bottom: ${props => props.borderBottom};
    `,

    StyledTableRow = styled.tr`
        ${props => props.border ?
            css`border-bottom: 1px ${props.borderColor ? props.borderColor : 'rgba(204,204,204,0.6)'} ${props => props.borderStyle};` :
            css``
        }

        td {
            width: 50%;
            height: 3rem;
        }
        td:nth-child(1) {
            text-align: ${props => props.keyTextAlign};
        }
        td:nth-child(2) {
            text-align: ${props => props.valueTextAlign};
        }
    `,

    StyledTableData = styled.td`
        &:first-child {
            font-size: ${props => `${props.keyFontSize}rem`};
            font-weight: ${props => props.keyFontWeight};
            color: ${props => props.theme.colors.grayTertiary};
        }
        &:last-child {
            font-size: ${props => `${props.valueFontSize}rem`};
            font-weight: ${props => props.valueFontWeight};
            color: ${props => props.theme.colors.grayTertiary};
        }
    `
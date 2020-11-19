import styled, { css } from 'styled-components'
export const

    StyledTable = styled.table`
        margin: auto;

        width: 100%;    
        height: ${props => typeof props.height === 'number' ? `${(props.height + 1) * 4}rem` : props.height};
    `,

    StyledTableBody = styled.tbody`
        min-height: 20rem;

        tr:first-child {
            background-color: ${props => props.backgroundColor ? props.backgroundColor : props => props.theme.colors.primary};
            
            td {
                font-size: 1.6rem;
                font-weight: 600;
                color: #FFFFFF;
            }
        }

        tr:not(:first-child) {
            &:nth-child(2n - 1) {
                background-color: rgba(250,250,255,0.8);
            }
        }
    `,

    StyledTableRow = styled.tr`
        min-height: 4.4rem;
        max-height: 4.4rem;
    `,

    StyledTableData = styled.td`
        min-height: 4.4rem;
        max-height: 4.4rem;

        font-size: 1.4rem;
        color: ${props => props.theme.colors.graySecondary};

        img {
            min-height: 2rem;
            max-height: 2rem;

            cursor: pointer;
        }
    `,

    StyledTableDataStatus = styled.span`
        ${props => {

            var style = css`padding: 0.2rem 0.8rem; color: #FFFFFF; border-radius: 0.4rem;`

            if (props.type === 'requests') {
                if (props.code === 0) {
                    style = [...style, 'background-color: rgb(25,25,25);']
                }
                if (props.code === 1) {
                    style = [...style, 'background-color: rgb(34,205,139);']
                }
                if (props.code === 2) {
                    style = [...style, 'background-color: rgb(255,94,0);']
                }
                if (props.code === 3) {
                    style = [...style, 'background-color: rgb(255,69,69);']
                }
            }

            if (props.type === 'account_status_delivery') {
                if (props.code === 1.1) {
                    style = [...style, 'background-color: rgba(150,180,255);']
                }
                if (props.code === 1.2) {
                    style = [...style, 'background-color: rgba(255,94,0);']
                }
                if (props.code === 1.3) {
                    style = [...style, 'background-color: rgba(34,205,139);']
                }
                if (props.code === 2.1) {
                    style = [...style, 'background-color: rgba(150,180,255);']
                }
                if (props.code === 2.2) {
                    style = [...style, 'background-color: rgba(255,94,0);']
                }
                if (props.code === 2.3) {
                    style = [...style, 'background-color: rgba(34,205,139);']
                }
            }

            if (props.type === 'account_status_payment') {
                if (props.code === 1.1) {
                    style = [...style, 'background-color: rgba(150,180,255);']
                }
                if (props.code === 1.2) {
                    style = [...style, 'background-color: rgba(255,94,0);']
                }
                if (props.code === 1.3) {
                    style = [...style, 'background-color: rgba(34,205,139);']
                }
                if (props.code === 2.1) {
                    style = [...style, 'background-color: rgba(150,180,255);']
                }
                if (props.code === 2.2) {
                    style = [...style, 'background-color: rgba(255,94,0);']
                }
                if (props.code === 2.3) {
                    style = [...style, 'background-color: rgba(34,205,139);']
                }
            }

            if (props.type === 'deliveryStatus') {
                if (props.code === '1') {
                    style = [...style, 'background-color: rgba(150,180,255);']
                }
                if (props.code === '2') {
                    style = [...style, 'background-color: rgba(255,94,0);']
                }
                if (props.code === '3') {
                    style = [...style, 'background-color: rgba(34,205,139);']
                }
            }

            if (props.type === 'paymentStatus') {
                if (props.code === '1') {
                    style = [...style, 'background-color: rgba(150,180,255);']
                }
                if (props.code === '2') {
                    style = [...style, 'background-color: rgba(34,205,139);']
                }
            }

            return style
        }
        }
    `
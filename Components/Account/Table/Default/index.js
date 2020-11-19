/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'
import Link from 'next/link'

/*redux************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../../../redux/actions/index.js'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import {
    StyledTable, StyledTableBody, StyledTableRow,
    StyledTableData, StyledTableDataStatus
} from './styles.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { reaisPayment } from '../../../../helpers/format/index.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function AccountTableDefault({
    type, heads, informations, numberOfColums,
    containerHeight = 'auto', height, backgroundColor
}) {

    let newDate

    return (
        <article style={{ width: '100%', height: containerHeight, backgroundColor: backgroundColor }}>
            <StyledTable numberOfColums={numberOfColums} height={height || informations.length}>

                <StyledTableBody>

                    <StyledTableRow>
                        {
                            heads.map((head, index) => (
                                <StyledTableData key={index}>
                                    <span>{head}</span>
                                </StyledTableData>
                            ))
                        }
                    </StyledTableRow>


                    {type === 'cartPage' && (
                        Object.keys(informations[0]).map((key, index) => (
                            <StyledTableRow backgroundColor={backgroundColor} key={index}>

                                <StyledTableData>
                                    {informations[index][key]}
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}

                    {type === 'requests' && (
                        informations.map((information, index) => {

                            newDate = new Date(information.createdAt)

                            return (
                                <StyledTableRow key={index}>

                                    <StyledTableData>
                                        {reaisPayment(information.payments.value)}
                                    </StyledTableData>

                                    <StyledTableData>
                                        <StyledTableDataStatus type={'requests'} code={information.payments.status}>
                                            {
                                                information.payments.status === 0 ? 'falha ao validar o pagamento' :
                                                    information.payments.status === 1 ? 'esperando pagamento' :
                                                        information.payments.status === 2 ? 'pagamento confirmado' :
                                                            information.payments.status === 3 && 'pedido cancelado'
                                            }

                                        </StyledTableDataStatus>
                                    </StyledTableData>

                                    <StyledTableData>
                                        {
                                            `${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
                                        }
                                    </StyledTableData>

                                    <StyledTableData>
                                        <Link href={`/account/requests/${information._id}`}>
                                            <span>
                                                <img src="/svg/eye.svg" alt="eye" />
                                            </span>
                                        </Link>
                                    </StyledTableData>

                                </StyledTableRow>
                            )

                        })
                    )}


                    {type === 'account_details_cart' && (
                        informations.map((information, index) => (
                            <StyledTableRow key={index}>

                                <StyledTableData>
                                    {reaisPayment((information.unitaryValue).toFixed(2))}
                                </StyledTableData>

                                <StyledTableData>
                                    {information.quantity}
                                </StyledTableData>

                                <StyledTableData>
                                    {reaisPayment((information.unitaryValue * information.quantity).toFixed(2))}
                                </StyledTableData>

                                <StyledTableData>
                                    <Link href={`http://localhost:9998/products/${information.products.reference}`}>
                                        <span>
                                            <img src="/svg/eye.svg" alt="eye" />
                                        </span>
                                    </Link>
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}


                    {type === 'account_details_delivery' && (
                        <StyledTableRow key={(new Date).getTime()}>

                            <StyledTableData>
                                {informations.cep}
                            </StyledTableData>

                            <StyledTableData>
                                {informations.street}
                            </StyledTableData>

                            <StyledTableData>
                                {informations.number}
                            </StyledTableData>

                            <StyledTableData>
                                {informations.city}
                            </StyledTableData>

                        </StyledTableRow>
                    )}


                    {type === 'account_details_payment' && (
                        <StyledTableRow key={(new Date).getTime()}>

                            <StyledTableData>
                                {informations.paymentMethod}
                            </StyledTableData>

                            { heads.length === 4 &&
                                (<StyledTableData>
                                    {informations.frete}
                                </StyledTableData>)
                            }

                            { heads.length === 4 &&
                                (<StyledTableData>
                                    {informations.value}
                                </StyledTableData>)
                            }

                            <StyledTableData>
                                {reaisPayment((informations.value).toFixed(2))}
                            </StyledTableData>

                        </StyledTableRow>
                    )}


                    {type === 'account_status_delivery' && (
                        informations.map((information, index) => (
                            <StyledTableRow key={index}>

                                <StyledTableData>
                                    <StyledTableDataStatus type='account_status_delivery' status={information.status}>
                                        {information.status}
                                    </StyledTableDataStatus>
                                </StyledTableData>

                                <StyledTableData>
                                    {
                                        `${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
                                    }
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}


                    {type === 'account_status_payment' && (
                        informations.map((information, index) => (
                            <StyledTableRow key={index}>

                                <StyledTableData>
                                    <StyledTableDataStatus type='account_status_payment' status={information.status}>
                                        {information.status}
                                    </StyledTableDataStatus>
                                </StyledTableData>

                                <StyledTableData>
                                    {
                                        `${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
                                    }
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}


                    {type === 'payment' && (
                        informations.map((information, index) => (
                            <StyledTableRow key={index}>

                                <StyledTableData>
                                    {information.paymentMethod}
                                </StyledTableData>

                                <StyledTableData>
                                    {information.frete}
                                </StyledTableData>

                                <StyledTableData>
                                    {information.value}
                                </StyledTableData>

                                <StyledTableData>
                                    {information.total}
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}

                    {type === 'deliveryStatus' && (
                        informations.map((information, index) => (
                            <StyledTableRow key={index}>

                                <StyledTableData>
                                    <StyledTableDataStatus type='deliveryStatus' code={information.code}>{information.status}</StyledTableDataStatus>
                                </StyledTableData>

                                <StyledTableData>
                                    {information.data}
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}

                    {type === 'paymentStatus' && (
                        informations.map((information, index) => (
                            <StyledTableRow key={index}>

                                <StyledTableData>
                                    <StyledTableDataStatus type='paymentStatus' code={information.code}>{information.status}</StyledTableDataStatus>
                                </StyledTableData>

                                <StyledTableData>
                                    {information.data}
                                </StyledTableData>

                            </StyledTableRow>
                        ))
                    )}

                </StyledTableBody>

            </StyledTable>
        </article >
    )

}

const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps, actions)(AccountTableDefault)
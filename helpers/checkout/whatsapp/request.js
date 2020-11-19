import { reaisPayment } from '../../format/index.js'

export const whatsappRequest = ({ cart, login, valuesInputs, selectedStateOption, WhatsappSelectedPaymentOption, requestId }) => {

console.log(cart)
    let cartString = '', request = '', date = new Date

    cart.map((item) => {
        cartString += `
título do produto: *${item.variations.title}*%0A
código de referência do produto: *${item.products.reference}*%0A
código da variação selecionada: *${item.variations.code}*%0A
valor unitário: *${reaisPayment((item.unitaryValue).toFixed(2))}*%0A
quantidade: *${item.quantity}*%0A
valor: *${reaisPayment((item.unitaryValue * item.quantity).toFixed(2))}*%0A%0A`
    })


    request = `https://web.whatsapp.com/send?phone=5585999203361&text=📦 *INFORMAÇÕES DOS PRODUTOS* 📦%0A%0A${cartString}%0A`
    request += `
💵 *INFORMAÇÕES PARA PAGAMENTO* 💵%0A
forma de pagamento selecionada: *${WhatsappSelectedPaymentOption}*%0A
valor do pedido: *${reaisPayment(((cart).reduce((acumulator, item) => acumulator + Number(item.unitaryValue) * Number(item.quantity), 0)).toFixed(2))}*%0A
%0A
%0A
📄 *INFORMAÇÕES CADASTRADAS* 📄%0A
nome: *${login.name}*%0A
e-mail: *${login.email}*%0A
telefone: *${login.phone[0]}, ${login.phone[1]}*%0A
cep: *${login.address.cep}*%0A
estado: *${login.address.state}*%0A
endereço: *${login.address.street}, ${login.address.number} - ${login.address.neighborhood}*%0A
%0A
%0A
📋 *INFORMAÇÕES PREENCHIDAS* 📋%0A
cep: *${valuesInputs.cep}*%0A
estado: *${selectedStateOption}*%0A
endereço: *${valuesInputs.street}, ${valuesInputs.number} - ${valuesInputs.neighborhood}*%0A
%0A
%0A
🔒 *INFORMAÇÕES DO PEDIDO* 🔒%0A
identificação do pedido: *${requestId}*%0A
`

    return request
}
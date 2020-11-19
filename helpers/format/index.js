export const numberPattern = /\d+/g

export const zipCodeFormat = (value) => {
  let aux, cep

  aux = (value || '').match(numberPattern)
  cep = (aux || []).join('')

  return cep.length > 5 ? `${cep.slice(0, 5)}-${cep.slice(5, 8)}` : cep
}

export const cpfFormat = (value) => {
  let aux, cpf

  aux = (value || '').match(numberPattern)
  cpf = (aux || []).join('')

  if (cpf.length > 9) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
  }
  if (cpf.length > 6) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}`
  }
  if (cpf.length > 3) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}`
  }

  return cpf
}

export const dateOfBirthFormat = (value) => {
  let aux, dateOfBirth

  aux = (value || '').match(numberPattern)
  dateOfBirth = (aux || []).join('')

  if (cpf.length > 4) {
    return `${cpf.slice(0, 2)}/${cpf.slice(2, 4)}/${cpf.slice(4, 8)}`
  }
  if (cpf.length > 2) {
    return `${cpf.slice(0, 2)}/${cpf.slice(2, 4)}`
  }

  return dateOfBirth
}

export const phoneFormat = (value) => {
  let aux, phone

  aux = (value || '').match(numberPattern)
  phone = (aux || []).join('')

  return phone.length > 2 ? `${phone.slice(0, 2)} ${phone.slice(2, 12)}` : phone
}

export const numberFormat = (value, limit) => {
  let aux, number

  aux = (value || '').match(numberPattern)
  number = (aux || []).join('')

  return limit ? `${number.slice(0, limit)}` : number
}

export const creditCardFormat = (value) => {
  let aux, creditCard

  aux = (value || '').match(numberPattern)
  creditCard = (aux || []).join('')

  if (creditCard.length > 12) {
    return `${creditCard.slice(0, 4)} ${creditCard.slice(4, 8)} ${creditCard.slice(8, 12)} ${creditCard.slice(12, 16)}`
  }
  if (creditCard.length > 8) {
    return `${creditCard.slice(0, 4)} ${creditCard.slice(4, 8)} ${creditCard.slice(8, 12)}`
  }
  if (creditCard.length > 4) {
    return `${creditCard.slice(0, 4)} ${creditCard.slice(4, 8)}`
  }

  return creditCard
}

export const dollarPayment = (value) => {
  return Number((value).replace(',', '.'))
}

export const reaisPayment = (value) => {
  return `R$ ${(String(value)).replace('.', ',')}`
}
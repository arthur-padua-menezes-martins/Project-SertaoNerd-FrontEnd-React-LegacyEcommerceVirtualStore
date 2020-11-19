import React from 'react'

export default {
    login: ([
        { name: 'email', type: 'text', placeholder: 'e-mail', icon: <img src="/svg/input_email.svg" alt="input_email" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'password', type: 'password', placeholder: 'senha', icon: <img src="/svg/input_lock.svg" alt="input_lock" />, errorIcon: <i class="fas fa-info-circle"></i> }
    ]),

    register: ([
        { name: 'name', type: 'text', placeholder: 'nome', icon: <img src="/svg/input_user.svg" alt="input_user" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'email', type: 'text', placeholder: 'e-mail', icon: <img src="/svg/input_email.svg" alt="input_email" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'password', type: 'password', placeholder: 'senha', icon: <img src="/svg/input_lock.svg" alt="input_lock" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'cpf', type: 'text', placeholder: 'cpf', icon: <img src="/svg/cpf.svg" alt="cpf" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'cep', type: 'text', placeholder: 'cep', icon: <img src="/svg/cep.svg" alt="cep" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'street', type: 'text', placeholder: 'rua', icon: <img src="/svg/direction_signs.svg" alt="direction_signs" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'number', type: 'text', placeholder: 'número', icon: <img src="/svg/numbers.svg" alt="numbers" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'city', type: 'text', placeholder: 'cidade', icon: <img src="/svg/house.svg" alt="house" />, errorIcon: <i class="fas fa-info-circle"></i> },
    ]),

    personalInformation: ([
        { name: 'name', type: 'text', placeholder: 'nome', icon: <img src="/svg/input_user.svg" alt="input_user" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'email', type: 'text', placeholder: 'e-mail', icon: <img src="/svg/input_email.svg" alt="input_email" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'cpf', type: 'text', placeholder: 'cpf', icon: <img src="/svg/cep.svg" alt="cep" />, errorIcon: <i class="fas fa-info-circle"></i> },
    ]),

    deliveryInformation: ([
        { name: 'cep', type: 'text', placeholder: 'cep', icon: <img src="/svg/cep.svg" alt="cep" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'neighborhood', type: 'text', placeholder: 'bairro', icon: <img src="/svg/direction_signs.svg" alt="direction_signs" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'street', type: 'text', placeholder: 'rua', icon: <img src="/svg/direction_signs.svg" alt="direction_signs" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'number', type: 'text', placeholder: 'número', icon: <img src="/svg/numbers.svg" alt="numbers" />, errorIcon: <i class="fas fa-info-circle"></i> },
        { name: 'city', type: 'text', placeholder: 'cidade', icon: <img src="/svg/house.svg" alt="house" />, errorIcon: <i class="fas fa-info-circle"></i> }
    ]),

    selectDeliveryInformation: ([
        { name: 'state', placeholder: 'estado', icon: <img src="/svg/arrow_down_bold.svg" alt="arrow_down_bold" /> }
    ]),

    selectPaymentInformations: ([
        { name: 'paymentMethod', placeholder: 'forma de pagamento', icon: '' }
    ]),

    selectOptionsDeliveryInformation: ([
        { name: 'AC' },
        { name: 'AL' },
        { name: 'AP' },
        { name: 'AM' },
        { name: 'BA' },
        { name: 'CE' },
        { name: 'ES' },
        { name: 'GO' },
        { name: 'MA' },
        { name: 'MT' },
        { name: 'MS' },
        { name: 'MG' },
        { name: 'PA' },
        { name: 'PB' },
        { name: 'PR' },
        { name: 'PE' },
        { name: 'PI' },
        { name: 'RJ' },
        { name: 'RN' },
        { name: 'RS' },
        { name: 'RO' },
        { name: 'RR' },
        { name: 'SC' },
        { name: 'SP' },
        { name: 'SE' },
        { name: 'TO' },
        { name: 'DF' }
    ]),

    selectOptionsPaymentInformations: ([
        { name: 'PAGAMENTO A VISTA', reference: 'creditCard' },
        { name: 'PAGAMENTO PARCELADO', reference: 'creditCard' },
    ]),

    freteInformation: ([
        { name: 'sedex', placeholder: 'frete', icon: <i class="fas fa-truck"></i> },
        { name: 'pac', placeholder: 'frete', icon: <i class="fas fa-truck"></i> }
    ])
}

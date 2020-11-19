import React from 'react'

export default {
    accountMenuInformations : ([
        { icon: <img src="/svg/account_user.svg" alt="account_user"/>, name: 'perfil', url: 'http://localhost:9998/account/perfil' },
        { icon: <img src="/svg/account_box.svg" alt="account_box"/>, name: 'pedidos', url: 'http://localhost:9998/account/requests' },
        { icon: <img src="/svg/account_star.svg" alt="account_star"/>, name: 'avaliações', url: 'http://localhost:9998/account/assessments' },
        { icon:  <img src="/svg/account_arrow_left.svg" alt="account_arrow_left"/>, name: 'logout', url: 'http://localhost:9998/account/logout' }
    ])
}
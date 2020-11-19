/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

import {
    StyledFooter,
    StyledFooterTop, StyledArticleFooterTop, StyledTopMessage, StyledTopSocialNetwork,
    StyledFooterMiddle, StyledArticleFooterMiddle, StyledMiddleAbout, StyledMiddleMyAccount, StyledMiddleContactUs,
    StyledFooterBottom, StyledArticleFooterBottom
} from './styles.js'



/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function FooterDesktop() {
    return (
        <>
            <StyledFooter>

                <StyledFooterTop>
                    <StyledArticleFooterTop>

                        <StyledTopMessage>
                            Sertão Nerd e Você, Sempre Conectados 🤍
                        </StyledTopMessage>

                        <StyledTopSocialNetwork>

                            <a href="https://www.facebook.com/SertaoNerdoficial" target="_blank" >
                                <img src="/svg/simple_facebook.svg" alt="logo_facebook" />
                            </a>

                            <a href="https://www.instagram.com/sertao_nerd/" target="_blank" >
                                <img src="/svg/simple_instagram.svg" alt="logo_instagram" />
                            </a>

                        </StyledTopSocialNetwork>

                    </StyledArticleFooterTop>
                </StyledFooterTop>


                <StyledFooterMiddle>
                    <StyledArticleFooterMiddle>

                        <StyledMiddleAbout>
                            <ul>
                                <li><span><strong>SOBRE NÓS</strong></span></li>
                                <ul>
                                    <li><span>o Sertão Nerd é a loja onde você poderá ter aquele Funko POP! que falta na sua coleção com o melhor preço que você ja viu.</span></li>
                                </ul>
                            </ul>
                        </StyledMiddleAbout>

                        <StyledMiddleMyAccount>
                            <ul>
                                <li><span><strong>MINHA CONTA</strong></span></li>
                                <ul>
                                    <li>
                                        <a href="/login" target="_blank">logar-se</a>
                                    </li>
                                    <li>
                                        <a href="/register" target="_blank">registrar-se</a>
                                    </li>
                                    <li>
                                        <a href="/cart" target="_blank">carrinho</a>
                                    </li>
                                </ul>
                            </ul>
                        </StyledMiddleMyAccount>

                        <StyledMiddleContactUs>
                            <ul>
                                <li><span><strong>ENTRE EM CONTATO</strong></span></li>
                                <ul>
                                    <li>
                                        <a href="https://web.whatsapp.com/send?phone=5585999203361" target="_blank" >
                                            <span>
                                                <img src="/svg/simple_whatsapp.svg" alt="go_to_whatsapp" />
                                            </span>
                                            <span>(85) 99920-3361</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:nerdanalisando@gmail.com" target="_blank" >
                                            <span>
                                                <img src="/svg/simple_email.svg" alt="go_to_whatsapp" />
                                            </span>
                                            <span>nerdanalisando@gmail.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span>
                                            <img src="/svg/simple_opening_hours.svg" alt="go_to_opening_hours" />
                                        </span>
                                        <span>Domingo à Domingo das 9h às 12h e das 15h as 19h</span>
                                    </li>
                                </ul>
                            </ul>
                        </StyledMiddleContactUs>

                    </StyledArticleFooterMiddle>
                </StyledFooterMiddle>


                <StyledFooterBottom>
                    <StyledArticleFooterBottom>
                        <span>desenvolvido por <a href="https://www.linkedin.com/in/arthur-padua-de-menezes-martins-35116219b/" target="_blank">SertãoTech</a></span>
                    </StyledArticleFooterBottom>
                </StyledFooterBottom>

            </StyledFooter>
        </>
    )
}
export default FooterDesktop
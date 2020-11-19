/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from "react"
import NextHead from "next/head"
import { string } from "prop-types"


/*var"s************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
var
    HeadDescription = "",
    HeadOgURL = "",
    HeadOgImage = "/static/logo.jpg"


/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
const Head = props => (
    <NextHead>

        <title>{props.title || "Sertão Nerd"}</title>

        <meta charSet="utf-8" />

        <meta
            name="description"
            content={props.description || ""} />

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1" />

        <meta
            property="og:url"
            content={props.url || HeadOgURL} />

        <meta
            property="og:title"
            content={props.title || ""} />

        <meta
            property="og:description"
            content={props.description || HeadDescription} />

        <meta
            property="og:image"
            content={props.ogImage || HeadOgImage} />

        <meta
            property="og:image:width"
            content="600" />

        <meta
            property="og:image:height"
            content="600" />

        <meta
            property="twitter:site"
            content={props.url || HeadOgURL} />

        <meta
            property="twitter:card"
            content="summary_large_image" />

        <meta
            property="twitter:image"
            content={props.ogImage || HeadOgImage} />

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />

        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" />

        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600&display=swap" />

        {
            props.pagSeguro && (
                <script type="text/javascript" src="https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"></script>
            )
        }

        {props.children}

    </NextHead>
)

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string
}

export default Head
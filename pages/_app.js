/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react';
import { Provider } from 'react-redux'
import App from 'next/app'
import { store, wrapper } from '../redux'

/*styles modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from '../src/styles/global.js'


/*main class************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
class MyApp extends App {

    static async getInitialProps(props) {
        const { Component, ctx } = props

        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        }
    }


    render() {

        const { Component, pageProps } = this.props

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme} >
                    <Component { ...{alreadyDeveloped: true, ...pageProps} } />
                    <GlobalStyle />
                </ThemeProvider>
            </Provider>
        )

    }
}
/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*function MyApp(props) {
const { Component, pageProps, store } = props
console.log(props)

    return (
        <Provider store={store ? store : Store}>
            <ThemeProvider theme = {theme} >
                <Component {...pageProps} />
            </ThemeProvider>
            <GlobalStyle />
        </Provider>
    )
}

MyApp.getInitialProps = async (ctx) => { 
    const appProps = await App.getInitialProps(ctx)
    return await { ...appProps }
}
*/
export default wrapper.withRedux(MyApp)
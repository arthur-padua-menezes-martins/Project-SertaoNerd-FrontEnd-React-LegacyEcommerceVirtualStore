/*basic modules*******************************************************************************************/
import React, { useState, useEffect } from 'react'

/*redux*******************************************************************************************/
import { connect } from 'react-redux'
import actions from '../redux/actions/index.js'
import getBaseInfo from '../helpers/getBaseInfo.js'

/*containers*******************************************************************************************/
import Header from '../Containers/Header/index.js'
import SubHeader from '../Containers/SubHeader/index.js'
import ProductsOfTheSearch from '../Containers/List/ProductsOfTheCategory/index.js'
import Footer from '../Containers/Footer/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import Layout from '../Components/Layout/index.js'

/*main function*******************************************************************************************/
const Search = props => {

    /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    useEffect(() => { props.verifyAuthentication() }, [])



    
    if (typeof window !== 'undefined') {

        /*var's*******************************************************************************************/
        var
            GET_SUB_HEADERS = undefined,
            GET_SEARCH_TERM = undefined,
            PROPS_KEYS = Object.keys(props).length,
            productsByLine

        /*state*******************************************************************************************/
        var
            [InitialInnerWidth, setInitialInnerWidth] = useState(window.innerWidth),
            [thisPage, setThisPage] = useState(0),
            [offset, setOffset] = useState(thisPage * 30),
            [limit, setLimit] = useState((thisPage + 1) * 30)




        /*auto invoked functions*******************************************************************************************/
        for (let i = 0; i < PROPS_KEYS; i++) {
            if (props[i] !== null && props[i] !== undefined) {

                if (props[i].type === 'GET_SUB_HEADERS') {
                    GET_SUB_HEADERS = props[i]
                }

                if (props[i].type === 'GET_SEARCH_TERM') {
                    GET_SEARCH_TERM = props[i]
                }

            }
        }




        if (typeof GET_SEARCH_TERM.payload.researchProducts.docs[0] !== 'undefined') {

            /*return desktop*******************************************************************************************/
            if (window.innerWidth >= 720) {
                productsByLine = window.innerWidth >= 1000 && 3 || window.innerWidth < 1000 && 2

                return (
                    <Layout>

                        <Header
                            InitialInnerWidth={InitialInnerWidth}
                            setInitialInnerWidth={setInitialInnerWidth}
                            Desktop={true}
                            Mobile={false}
                            Default={true} />

                        <SubHeader
                            informations={GET_SUB_HEADERS.payload}
                            Desktop={true}
                            Mobile={false} />

                        <ProductsOfTheSearch
                            informations={GET_SEARCH_TERM.payload.researchProducts}
                            offset={offset}
                            limit={limit}
                            productsByLine={productsByLine} />

                        <Footer />

                    </Layout>
                )
            }


            /*return mobile*******************************************************************************************/
            if (window.innerWidth < 720) {
                productsByLine = 2

                return (
                    <Layout>

                        <Header
                            InitialInnerWidth={InitialInnerWidth}
                            setInitialInnerWidth={setInitialInnerWidth}
                            Desktop={false}
                            Mobile={true}
                            Default={true} />

                        <ProductsOfTheSearch
                            informations={GET_SEARCH_TERM.payload.researchProducts}
                            offset={offset}
                            limit={limit}
                            productsByLine={productsByLine} />

                        <Footer />
                        
                    </Layout>
                )
            }

        }
        else {
            return (<></>)
        }

    }
    else {
        return (
            <></>
        )
    }

}

Search.getInitialProps = async (ctx) => {

    return getBaseInfo([
        actions.getSubHeaders,
        actions.getSearchTerm.bind(null, ((ctx.query.search) || ' '), 0, 30)
    ], ctx)

}

const mapStateToProps = (state, ownProps) => ({
    ...state, ownProps
})
export default connect(mapStateToProps, actions)(Search)
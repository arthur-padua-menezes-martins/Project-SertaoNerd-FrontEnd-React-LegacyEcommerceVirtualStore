/*basic modules*******************************************************************************************/
import React, { useState, useEffect } from 'react'

/*redux*******************************************************************************************/
import { connect } from 'react-redux'
import actions from '../../redux/actions/index.js'
import getBaseInfo from '../../helpers/getBaseInfo.js'

/*containers*******************************************************************************************/
import Header from '../../Containers/Header/index.js'
import SubHeader from '../../Containers/SubHeader/index.js'
import ProductsOfTheCategory from '../../Containers/List/ProductsOfTheCategory/index.js'
import Footer from '../../Containers/Footer/index.js'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import Layout from '../../Components/Layout/index.js'

/*main function*******************************************************************************************/
const Categories = props => {

    if (typeof window !== 'undefined') {

        /*var's*******************************************************************************************/
        var
            GET_SUB_HEADERS = undefined,
            CATEGORY_ID = undefined,
            PROPS_KEYS = Object.keys(props).length,
            productsByLine

        /*state*******************************************************************************************/
        var
            [InitialInnerWidth, setInitialInnerWidth] = useState(window.innerWidth),
            [thisPage, setThisPage] = useState(0),
            [limit, setLimit] = useState(4),
            [offset, setOffset] = useState(thisPage * limit)




        /*auto invoked functions*******************************************************************************************/
        for (let i = 0; i < PROPS_KEYS; i++) {
            if (props[i] !== null && props[i] !== undefined) {
                if (props[i].type === 'GET_SUB_HEADERS') {
                    GET_SUB_HEADERS = props[i]
                }
            }
        }
        GET_SUB_HEADERS.payload.names.filter((name, index) => {
            if (name === window.__NEXT_DATA__.query.categories) {
                CATEGORY_ID = index
            }
        })
        CATEGORY_ID = GET_SUB_HEADERS.payload._id[CATEGORY_ID]




        /*hooks*******************************************************************************************/
        useEffect(() => { props.verifyAuthentication() }, [])
        useEffect(() => {
            setOffset(thisPage * limit)
            props.getProductsOfTheCategory_default(CATEGORY_ID, thisPage * limit, limit)
        }, [thisPage])




        if (props.productsOfTheCategory.ProductsPagination) {

            /*return desktop*******************************************************************************************/
            if (window.innerWidth > 720) {
                productsByLine = window.innerWidth >= 1000 && 3 || window.innerWidth < 1000 && 2

                return (
                    <Layout title={`Sertão Nerd`}>

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

                        <ProductsOfTheCategory
                            informations={props.productsOfTheCategory.ProductsPagination}
                            offset={offset}
                            limit={limit}
                            productsByLine={productsByLine}
                            thisPage={thisPage}
                            setThisPage={setThisPage} />

                        <Footer />

                    </Layout>
                )
            }


            /*return mobile*******************************************************************************************/
            if (window.innerWidth <= 720) {
                productsByLine = 2

                return (
                    <Layout>

                        <Header
                            InitialInnerWidth={InitialInnerWidth}
                            setInitialInnerWidth={setInitialInnerWidth}
                            Desktop={false}
                            Mobile={true}
                            Default={true} />

                        <ProductsOfTheCategory
                            informations={props.productsOfTheCategory.ProductsPagination}
                            offset={offset}
                            limit={limit}
                            productsByLine={productsByLine}
                            thisPage={thisPage}
                            setThisPage={setThisPage} />

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

Categories.getInitialProps = async (ctx) => {

    return getBaseInfo([
        actions.getSubHeaders
    ], ctx)

}

const mapStateToProps = (state, ownProps) => ({
    ...state, ownProps
})
export default connect(mapStateToProps, actions)(Categories)
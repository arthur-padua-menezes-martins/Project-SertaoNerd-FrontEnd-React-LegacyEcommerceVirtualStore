import { combineReducers } from 'redux'
import whatsappReducers from './whatsapp'
import loginReducers from './login.js'
import subHeadersReducers from './subHeaders.js'
import homePageProductsReducers from './homePageProducts.js'
import productsOfTheCategoryReducers from './productsOfTheCategory.js'
import productByReferenceReducers from './productByReference.js'
import searchTermReducers from './searchTerm.js'
import cartReducers from './cart.js'
import checkoutReducers from './checkout.js'
import accountRequestsReducers from './accountRequests.js'


const reducers = combineReducers({
    whatsapp: whatsappReducers,
    login: loginReducers,
    subHeaders: subHeadersReducers,
    homePageProducts: homePageProductsReducers,
    productsOfTheCategory: productsOfTheCategoryReducers,
    productByReference: productByReferenceReducers,
    searchTerm: searchTermReducers,
    cart: cartReducers,
    checkout: checkoutReducers,
    accountRequests: accountRequestsReducers
})
export default reducers
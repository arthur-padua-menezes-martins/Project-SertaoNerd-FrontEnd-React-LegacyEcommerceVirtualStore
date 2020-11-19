import login from './login.js'
import register from './register.js'
import subHeaders from './subHeaders.js'
import homePageProducts from './homePageProducts.js'
import productsOfTheCategory from './productsOfTheCategory.js'
import productByReference from './productByReference.js'
import searchTerm from './searchTerm.js'
import cart from './cart.js'
import checkout from './checkout.js'
import accountRequests from './accountRequests.js'

export default {
  ...login,
  ...register,
  ...subHeaders,
  ...homePageProducts,
  ...productsOfTheCategory,
  ...productByReference,
  ...searchTerm,
  ...cart,
  ...checkout,
  ...accountRequests
}

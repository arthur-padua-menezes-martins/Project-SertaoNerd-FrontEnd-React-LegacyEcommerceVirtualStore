const _saveCart = (item) => {
  console.log(item)
  var cart = getCart(item.user_id); var found

  cart = cart.map(_item => {
    if (_item.products._id === item.products._id && _item.variations._id === item.variations._id) {
      found = true

      return { ...item, quantity: Number(_item.quantity) + Number(item.quantity), user_id: _item.user_id }
    } else {
      return _item
    }
  })

  if (!found) {
    cart.push(item)
  }

  localStorage.setItem(`@cart${cart[0].user_id}`, JSON.stringify(cart))
}

export const

  addCart = (item) => {
    _saveCart(item)
  }

const getCart = (user_id) => {
  try {
    return JSON.parse(localStorage.getItem(`@cart${user_id}`) || '[]')
  } catch (e) {
    return '[]'
  }
}

const getCountItemsCart = (user_id) => {
  return getCart(user_id).reduce((acumulator, { quantity }) => acumulator + (Number(quantity) || 1), 0)
}

const removeCart = (index, user_id) => {
  var cart = getCart(user_id)

  cart = cart.reduce((acumulator, item, idx) =>
    index !== idx ? acumulator.concat([item]) : acumulator, [])

  localStorage.setItem(`@cart${user_id}`, JSON.stringify(cart))
}

const cleanCart = () => localStorage.removeItem('@cart')

export default {
  addCart,
  getCart,
  cleanCart,
  getCountItemsCart,
  removeCart
}


export const addItemToCart = (cartItems, cartItemAdd) => {
    
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemAdd.id)

    if(existingCartItem) {
        return cartItems.map( cartItem => cartItem.id === cartItemAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    } 

    return [...cartItems, {...cartItemAdd, quantity: 1}]
}

export const removeOneItem = (cartItems, cartItemRemove) => {
    
    if(cartItemRemove.quantity === 1) {
        return cartItems.filter( cartItem => cartItem.id !== cartItemRemove.id)
    } 

    return cartItems.map( item => (item.id === cartItemRemove.id) ? ( {...item, quantity: item.quantity - 1 }) : item)
}
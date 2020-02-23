import {createSelector} from 'reselect'

//2 tipos de selector -> input y output -> output usa createSelector

const selectCart = state => state.cart //lo unico que es es una funcion que me trae el una parte del state / en general 1 layer

export const selectCartItems = createSelector( // esto es medio un quilombo. toma el input selector y su respectivo slice del state osea su output
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsNumber = createSelector( // aca en vez de un input selector uso un output selector directamente y muevo el calculo aca para que se haga solo cuando realmemte cambia el value del state
    [selectCartItems],
    cartItems => cartItems.reduce( ( acumulated , cartItem ) => acumulated += cartItem.quantity , 0)
)

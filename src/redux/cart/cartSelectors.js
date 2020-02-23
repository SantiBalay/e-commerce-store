import {createSelector} from 'reselect'

//2 tipos de selector -> input y output -> output usa createSelector

const selectCart = state => state.cart //lo unico que es es una funcion que me trae el una parte del state / en general 1 layer

export const selectCartItems = createSelector( // esto es medio un quilombo. toma el input selector y su respectivo slice del state osea su output
    [selectCart],
    (cart)
)
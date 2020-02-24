import {createSelector} from 'reselect'

export const selectShop = (state) => state.shop

export const selectShopData = createSelector(
    [selectShop],
    (shop) => shop.shopData
)

//lo hago array para el preview
export const selectShopDataPreview = createSelector(
    [selectShopData],
    (shopData) => Object.keys(shopData).map( key => shopData[key])
)

export const selectCategoryData = categoryName => createSelector(
    [selectShopData],
    (shopData) => shopData[categoryName]
)
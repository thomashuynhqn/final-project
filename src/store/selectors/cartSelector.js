import { createSelector } from '@reduxjs/toolkit'

const selectCart = state => state.cart

const selectProducts = createSelector(selectCart, cart => cart.products)

const selectTotalQuantity = createSelector(selectProducts, products =>
	products.reduce((sum, product) => sum + product.quantity, 0)
)

const selectTotalPrice = createSelector(selectProducts, products =>
	products.reduce((sum, { product, quantity }) => sum + product.price.actual * quantity, 0)
)

const cartSelector = {
	selectProducts,
	selectTotalPrice,
	selectTotalQuantity
}

export default cartSelector

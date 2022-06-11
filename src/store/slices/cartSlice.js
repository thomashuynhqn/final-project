import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: []
}

const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			state.products = [...state.products, payload]
		}
	}
})

export const cartActions = slice.actions
export const cartReducer = slice.reducer

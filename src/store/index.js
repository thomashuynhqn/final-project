import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { authReducer } from './slices/authSlice'
import { cartReducer } from './slices/cartSlice'
import { languageReducer } from './slices/languageSlice'

const reducer = combineReducers({
	auth: authReducer,
	language: languageReducer,
	cart: cartReducer
})

const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export const persistor = persistStore(store)
export default store

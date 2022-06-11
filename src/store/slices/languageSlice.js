import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
	language: {
		label: 'English',
		locale: 'en',
		flag: 'US'
	}
}

const slice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage: (state, { payload }) => {
			state.language = payload
		}
	}
})

const persistConfig = {
	keyPrefix: 'c2Shop',
	key: 'Language',
	storage
}

export const languageActions = slice.actions
export const languageReducer = persistReducer(persistConfig, slice.reducer)

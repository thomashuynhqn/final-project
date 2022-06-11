import { createSelector } from '@reduxjs/toolkit'

const selectAuthBranch = state => state.auth

const selectIsloading = createSelector(selectAuthBranch, auth => auth.isLoading)

const authSelector = {
	selectIsloading
}

export default authSelector

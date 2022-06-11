import { createSelector } from '@reduxjs/toolkit'

const selectLanguageBranch = state => state.language

const selectLanguage = createSelector(selectLanguageBranch, language => language.language)

const languageSelectors = {
	selectLanguage
}

export default languageSelectors

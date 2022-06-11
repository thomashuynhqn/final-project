import useLanguage from '$hooks/useLanguage'
import { useTheme } from '@emotion/react'
import { FormControl, FormHelperText, FormLabel, Grid, TextareaAutosize } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const AreaField = props => {
	const theme = useTheme()

	const { t } = useLanguage()

	const {
		name,
		control,

		label,
		helperText,
		layout,
		...rest
	} = props

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => (
				<FormControl fullWidth error={!!errors[name]}>
					<Grid container {...layout.grid}>
						<Grid item {...layout.label}>
							<FormLabel htmlFor={name} focused={false}>
								{label}
							</FormLabel>
						</Grid>
						<Grid item {...layout.input}>
							{errors[name] ? (
								<TextareaAutosize
									style={{
										outlineColor: theme.palette.error.main,
										borderColor: theme.palette.error.main
									}}
									id={name}
									{...field}
									{...rest}
								/>
							) : (
								<TextareaAutosize id={name} {...field} {...rest} />
							)}
						</Grid>
						{(!!errors[name] || helperText) && (
							<Grid item {...layout.input}>
								<FormHelperText sx={{ mx: 0 }}>
									{t(errors[name]?.message.key, errors[name]?.message.values) || helperText}
								</FormHelperText>
							</Grid>
						)}
					</Grid>
				</FormControl>
			)}
		/>
	)
}

AreaField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,

	minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

	label: PropTypes.string,
	helperText: PropTypes.string,
	layout: PropTypes.object
}

AreaField.defaultProps = {
	label: '',
	helperText: '',
	layout: {
		grid: {
			my: 1
		},
		label: {
			xs: 12
		},
		input: {
			xs: 12
		}
	}
}

export default AreaField

import useLanguage from '$hooks/useLanguage'
import { FormControl, FormHelperText, FormLabel, Grid, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const InputField = props => {
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
			render={({ field: { onChange, onBlur, value, ref }, formState: { errors } }) => (
				<FormControl fullWidth error={!!errors[name]} {...rest}>
					<Grid container {...layout.grid}>
						<Grid item {...layout.label}>
							<FormLabel htmlFor={name} focused={false}>
								{label}
							</FormLabel>
						</Grid>
						<Grid item {...layout.input}>
							<TextField
								size="small"
								id={name}
								inputRef={ref}
								inputProps={{ onBlur, onChange }}
								value={value}
								error={!!errors[name]}
								{...rest}
							/>
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

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,

	label: PropTypes.string,
	helperText: PropTypes.string,
	layout: PropTypes.object
}

InputField.defaultProps = {
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

export default InputField

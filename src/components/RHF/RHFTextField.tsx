import { TextFieldProps, TextField } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type RHFTextFieldProps<T extends FieldValues> = TextFieldProps & UseControllerProps<T>

export const RHFTextField = <T extends FieldValues>({ control, name, disabled, ...props }: RHFTextFieldProps<T>) => {
  const {
    field: { ref: fieldReferense, ...field },
    fieldState: { error },
    formState
  } = useController({ control, name })

  return (
    <TextField
      {...field}
      {...props}
      inputRef={fieldReferense}
      fullWidth
      disabled={formState.isSubmitting || disabled}
      error={!!error}
      helperText={error?.message || ''}
    />
  )
}

import { TextFieldProps, TextField } from '@mui/material'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type RHFDateFieldProps<T extends FieldValues> = TextFieldProps & UseControllerProps<T>

export const RHFDateField = <T extends FieldValues>({ control, name, disabled, ...props }: RHFDateFieldProps<T>) => {
  const {
    field: { ref: fieldReferense, ...field },
    fieldState: { error },
    formState
  } = useController({ control, name })

  return (
    <TextField
      {...field}
      {...props}
      type='date'
      inputRef={fieldReferense}
      fullWidth
      disabled={formState.isSubmitting || disabled}
      error={!!error}
      helperText={error?.message || ''}
    />
  )
}

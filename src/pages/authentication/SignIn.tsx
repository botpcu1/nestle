import { FC } from 'react'

import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { StyledPage } from '../../layouts/StyledPage'
import { RHFTextField } from '../../components/RHF'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInType = {
  email: string
  password: string
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Este campo es requerido'),
  password: yup.string().required('Este campo es requerido')
})

export const SignInPage: FC = () => {
  const navigate = useNavigate()

  const defaultValues: SignInType = {
    email: '',
    password: ''
  }

  const { handleSubmit, control } = useForm<SignInType>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const handleFormSubmit = (data: SignInType) => {
    console.log({
      email: data.email,
      password: data.password
    })

    navigate('/home/1')
  }

  return (
    <StyledPage>
      <Box bgcolor={'#89CFF0'} padding={'40px'} borderRadius={'10px'} minWidth={'300px'}>
        <Typography variant='h3' mb={1}>
          Sign In
        </Typography>
        <Box display={'flex'} flexDirection='column'>
          <Box>
            <RHFTextField label='Email' name='email' control={control} />
          </Box>
          <Box mt={2}>
            <RHFTextField label='Password' name='password' control={control} />
          </Box>
          <Button
            onClick={handleSubmit(async (values) => {
              await handleFormSubmit(values)
            })}
            color={'secondary'}
            sx={{ mt: 2 }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </StyledPage>
  )
}

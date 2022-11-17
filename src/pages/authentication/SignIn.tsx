import { FC } from 'react'

import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const SignInPage: FC = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Typography>SIGNIN</Typography>
      <Button onClick={() => navigate('/home')}>SEGUIR</Button>
    </Box>
  )
}

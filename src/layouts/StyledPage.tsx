import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledPage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

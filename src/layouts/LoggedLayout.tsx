import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { LoggedAppBar } from '../components'

export const LoggedLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', bgcolor: '#FFFFFF' }}>
      <LoggedAppBar />
      <Outlet />
    </Box>
  )
}

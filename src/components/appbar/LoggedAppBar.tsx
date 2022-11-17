import { FC } from 'react'

import { Box, Typography } from '@mui/material'

export const LoggedAppBar: FC = () => {
  return (
    <Box
      width={'100%'}
      height={'60px'}
      bgcolor={'#FFF010'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography variant='h4' ml={'60px'}>
        Nestle
      </Typography>
      <Box
        component={'img'}
        src={'https://gateway.pinata.cloud/ipfs/QmZyUKuTMEvn2qiiNFCe6NDjMioh2uyeK94aHrmu597qXu'}
        width={'200px'}
        mr={'60px'}
      />
    </Box>
  )
}

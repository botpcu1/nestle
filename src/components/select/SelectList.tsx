import { FC } from 'react'

import BusinessIcon from '@mui/icons-material/Business'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Menuitem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type SelectListProps = {
  label: string
  selectedItem: string
  onChange: (event: SelectChangeEvent) => void
  selectableItems: string[]
  isLoading?: boolean
}

export const SelectList: FC<SelectListProps> = ({
  label,
  selectedItem,
  selectableItems,
  onChange,
  isLoading = false
}) => {
  return (
    <Box>
      <InputLabel id='select-id-label'>{label}</InputLabel>
      <Select
        id='select-id'
        labelId='select-id-label'
        value={selectedItem}
        label={label}
        onChange={onChange}
        size={'medium'}
        color={'secondary'}
        disabled={isLoading}
        fullWidth
      >
        {selectableItems.map((item, index) => (
          <Menuitem key={index} value={item}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BusinessIcon color={isLoading ? 'disabled' : 'secondary'} sx={{ mr: 1 }} />
              {item}
            </Box>
          </Menuitem>
        ))}
      </Select>
    </Box>
  )
}

import { FC, useState } from 'react'

import { Box, Typography, Button, TextField } from '@mui/material'
import { RHFDateField, RHFTextField } from '../../../components/RHF'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledPage } from '../../../layouts/StyledPage'
import { SelectList } from '../../../components/select/SelectList'
import { PARENT_BUSINESS, QUARTER_INFO, PRODUCTS } from '../../../services/cte'
import { useNavigate } from 'react-router-dom'

type Tier1FormData = {
  date: string
}

const validationSchema = yup.object().shape({
  date: yup.string().required('Este campo es requerido')
})

export const Tier1Page: FC = () => {
  const navigate = useNavigate()

  const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCTS[0])
  const [selectedQuarterInformation, setSelectedQuarterInformation] = useState<string>(QUARTER_INFO[0])

  const defaultValues: Tier1FormData = {
    date: ''
  }

  const { handleSubmit, control, watch } = useForm<Tier1FormData>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const handleFormSubmit = (data: Tier1FormData) => {
    console.log(data.date)

    console.log({
      selectedProduct,
      selectedQuarterInformation,
      date: data.date
    })

    navigate('/home/2')
  }

  const watchDate = watch('date')

  return (
    <StyledPage>
      <Box>
        <Typography>TIER1</Typography>
        {/* <TextField
          id='date'
          label='Birthday'
          type='date'
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
          onChange={(item) => console.log(item.target.value)}
        /> */}
        <Box display={'flex'} alignItems={'center'}>
          <Box>
            <RHFDateField label='' name='date' control={control} />
          </Box>
          {/* <Box>
          <RHFTextField label='Texto' name='products' control={control} />
        </Box> */}
          <Box mb={3} mx={2}>
            <SelectList
              label='Quarter Information'
              selectedItem={QUARTER_INFO[0]}
              selectableItems={QUARTER_INFO}
              onChange={(item) => setSelectedProduct(item.target.value)}
            />
          </Box>
          <Box mb={3}>
            <SelectList
              label='Products'
              selectedItem={PRODUCTS[0]}
              selectableItems={PRODUCTS}
              onChange={(item) => setSelectedQuarterInformation(item.target.value)}
            />
          </Box>
        </Box>
        <Button
          variant='contained'
          onClick={handleSubmit((values) => {
            handleFormSubmit(values)
          })}
          disabled={watchDate.length === 0 || selectedProduct.length === 0 || selectedQuarterInformation.length === 0}
        >
          Siguiente
        </Button>
      </Box>
    </StyledPage>
  )
}

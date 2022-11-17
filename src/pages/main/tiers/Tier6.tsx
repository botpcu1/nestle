import { FC, useState } from 'react'

import { Typography, Button, Grid } from '@mui/material'
import { RHFTextField } from '../../../components/RHF'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledPage } from '../../../layouts/StyledPage'
import { SelectList } from '../../../components/select/SelectList'
import { PARENT_BUSINESS, CROP } from '../../../services/cte'
import { useNavigate } from 'react-router-dom'

type Tier6Data = {
  volume: string
}

const validationSchema = yup.object().shape({
  volume: yup.string().required('Este campo es requerido')
})

export const Tier6Page: FC = () => {
  const navigate = useNavigate()

  const [selectedParentCompany, setSelectedParentCompany] = useState<string>(PARENT_BUSINESS[0])
  const [selectedCompany, setSelectedCompany] = useState<string>(PARENT_BUSINESS[0])
  const [selectedRSPO, setSelectedRSPO] = useState<string>(PARENT_BUSINESS[0])
  const [selectedCROP, setSelectedCROP] = useState<string>(CROP[0])

  const defaultValues: Tier6Data = {
    volume: ''
  }

  const { handleSubmit, control, watch } = useForm<Tier6Data>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const handleFormSubmit = (data: Tier6Data) => {
    console.log({
      selectedParentCompany,
      selectedCompany,
      volume: data.volume,
      selectedCROP
    })

    navigate('/home')
  }

  const watchVolume = watch('volume')

  return (
    <StyledPage>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} paddingX={'20px'}>
          <Typography variant='h6'>TIER6</Typography>
        </Grid>
        <Grid item xs={5} mb={3} mr={1}>
          <SelectList
            label='Parent Company'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedParentCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={5} ml={1} mt={3}>
          <RHFTextField label='Volume' name='volume' control={control} />
        </Grid>
        <Grid item xs={5} mr={1}>
          <SelectList
            label='Company Name'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={5} ml={1}>
          <SelectList
            label='RSPO'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={12} paddingX={'20px'} mt={3}>
          <Button variant='outlined' onClick={() => navigate(-1)} sx={{ mr: 1 }}>
            Atras
          </Button>
          <Button
            variant='contained'
            onClick={handleSubmit((values) => {
              handleFormSubmit(values)
            })}
            disabled={watchVolume.length === 0 || selectedParentCompany.length === 0 || selectedCompany.length === 0}
          >
            Finalizar
          </Button>
        </Grid>
      </Grid>
    </StyledPage>
  )
}

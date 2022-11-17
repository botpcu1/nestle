import { FC, useState } from 'react'

import { Typography, Button, Grid } from '@mui/material'
import { RHFTextField } from '../../../components/RHF'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledPage } from '../../../layouts/StyledPage'
import { SelectList } from '../../../components/select/SelectList'
import { PARENT_BUSINESS, TYPE_SUPPLIER } from '../../../services/cte'
import { useNavigate } from 'react-router-dom'

type Tier5Data = {
  volume: string
}

const validationSchema = yup.object().shape({
  volume: yup.string().required('Este campo es requerido')
})

export const Tier5Page: FC = () => {
  const navigate = useNavigate()

  const [selectedParentCompany, setSelectedParentCompany] = useState<string>(PARENT_BUSINESS[0])
  const [selectedCompany, setSelectedCompany] = useState<string>(PARENT_BUSINESS[0])
  const [selectedSupplier, setSelectedSupplier] = useState<string>(TYPE_SUPPLIER[0])
  const [selectedRSPO, setSelectedRSPO] = useState<string>(PARENT_BUSINESS[0])

  const defaultValues: Tier5Data = {
    volume: ''
  }

  const { handleSubmit, control, watch } = useForm<Tier5Data>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const handleFormSubmit = (data: Tier5Data) => {
    console.log({
      selectedParentCompany,
      selectedCompany,
      volume: data.volume
    })

    navigate('/home/6')
  }

  const watchVolume = watch('volume')

  return (
    <StyledPage>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} paddingX={'20px'}>
          <Typography variant='h6'>TIER5</Typography>
        </Grid>
        <Grid item xs={3} mb={3}>
          <SelectList
            label='Parent Company'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedParentCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={3} mt={3} mx={1}>
          <RHFTextField label='Volume' name='volume' control={control} />
        </Grid>
        <Grid item xs={3} mb={3}>
          <SelectList
            label='Supplier'
            selectedItem={TYPE_SUPPLIER[0]}
            selectableItems={TYPE_SUPPLIER}
            onChange={(item) => setSelectedSupplier(item.target.value)}
          />
        </Grid>
        <Grid item xs={3} mx={1} mt={3}>
          <RHFTextField label='Volume' name='volume' control={control} />
        </Grid>
        <Grid item xs={3}>
          <SelectList
            label='Company Name'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={3} ml={1}>
          <SelectList
            label='RSPO'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedRSPO(item.target.value)}
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
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </StyledPage>
  )
}

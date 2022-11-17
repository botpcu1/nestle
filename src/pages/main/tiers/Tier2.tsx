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

type Tier2FormData = {
  comments: string
}

const validationSchema = yup.object().shape({
  comments: yup.string().required('Este campo es requerido')
})

export const Tier2Page: FC = () => {
  const navigate = useNavigate()

  const [selectedParentCompany, setSelectedParentCompany] = useState<string>(PARENT_BUSINESS[0])
  const [selectedCompany, setSelectedCompany] = useState<string>(PARENT_BUSINESS[0])
  const [selectedRSPO, setSelectedRSPO] = useState<string>(PARENT_BUSINESS[0])
  const [selectedCROP, setSelectedCROP] = useState<string>(CROP[0])

  const defaultValues: Tier2FormData = {
    comments: ''
  }

  const { handleSubmit, control, watch } = useForm<Tier2FormData>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const handleFormSubmit = (data: Tier2FormData) => {
    console.log({
      selectedParentCompany,
      selectedCompany,
      comments: data.comments,
      selectedCROP
    })

    navigate('/home/3')
  }

  const watchComments = watch('comments')

  return (
    <StyledPage>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} paddingX={'20px'}>
          <Typography variant='h6'>TIER2</Typography>
        </Grid>
        <Grid item xs={3} mb={3}>
          <SelectList
            label='CROP'
            selectedItem={CROP[0]}
            selectableItems={CROP}
            onChange={(item) => setSelectedCROP(item.target.value)}
          />
        </Grid>
        <Grid item xs={3} mb={3} mx={2}>
          <SelectList
            label='Parent Company'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedParentCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={3} mb={3}>
          <SelectList
            label='Company Name'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedCompany(item.target.value)}
          />
        </Grid>
        <Grid item xs={4} mb={3} mr={3}>
          <SelectList
            label='RSPO'
            selectedItem={PARENT_BUSINESS[0]}
            selectableItems={PARENT_BUSINESS}
            onChange={(item) => setSelectedRSPO(item.target.value)}
          />
        </Grid>
        <Grid item xs={4} mt={3}>
          <RHFTextField label='Comments' name='comments' control={control} />
        </Grid>
        <Grid item xs={12} paddingX={'20px'}>
          <Button variant='outlined' onClick={() => navigate(-1)} sx={{ mr: 1 }}>
            Atras
          </Button>
          <Button
            variant='contained'
            onClick={handleSubmit((values) => {
              handleFormSubmit(values)
            })}
            disabled={
              watchComments.length === 0 ||
              selectedParentCompany.length === 0 ||
              selectedCompany.length === 0 ||
              selectedRSPO.length === 0
            }
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </StyledPage>
  )
}

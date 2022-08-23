import React from 'react'

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function UserContract() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="UserID" label="Id" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ContractID" label="Id" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ContractName" label="Adı" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ContractTypeID" label="Id" fullWidth />
        </Grid>
        </Grid>
        <Stack mt={3}>
        <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
        </Stack>
      
    </FormProvider>
  )
}

export default UserContract
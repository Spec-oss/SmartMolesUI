import React from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function Modem() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="GatewayID" label="Gateway ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="UserID" label="Kullanıcı ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ImeiNumber" label="IMEI Numarası" fullWidth />
        </Grid>
      </Grid>
      <Stack mt={3}>
        <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default Modem;
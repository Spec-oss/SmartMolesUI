import React from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function Gateway() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="SalesID" label="Satış ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="UserID" label="Kullanıcı ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Lang" label="Lang" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Lat" label="Lat" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ServerIP" label="Server IP" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ServerPort" label="Server Port" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="GatewayIP" label="Gateway IP" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="GatewayPort" label="Gateway Port" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="TelitClientPort" label="Telit Client Port" fullWidth />
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

export default Gateway;

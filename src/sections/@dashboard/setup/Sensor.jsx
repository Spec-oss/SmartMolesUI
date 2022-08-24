import React from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function Sensor() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="WorkGroupID" label="Çalışma Grubu ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ConnectPeriodWhenStop" label="ConnectPeriodWhenStop" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ConnectPeriodWhenWork" label="ConnectPeriodWhenWork" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="IrrigationTypes" label="Sulama Türü" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="DripperRanges" label="Sulama Aralığı" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="SensorType" label="Sensör Türü" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PlantType" label="Bitki Türü" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="SensorLocation" label="Sensör Konumu" fullWidth />
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

export default Sensor;

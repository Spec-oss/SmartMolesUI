import React from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function Pump() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="ValveID" label="ValveID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="SensorCardID" label="SensorCardID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ValveManagementType" label="ValveManagementType" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PumpManagementType" label="PumpManagementType" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PressureSensor" label="PressureSensor" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PressureUpLimit" label="PressureUpLimit" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PressureDownLimit" label="PressureDownLimit" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ConnectPeriodWhenWork" label="ConnectPeriodWhenWork" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ConnectPeriodWhenStop" label="ConnectPeriodWhenStop" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="WaterMeter" label="WaterMeter" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="LitrePulseCount" label="LitrePulseCount" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="DigitalPump" label="DigitalPump" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Description" label="Description" fullWidth />
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

export default Pump;

import React from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function Valve() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="WorkGroupID" label="Çalışma Grubu ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="SensorCardID" label="SensorCardID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="TimerManagementID" label="TimerManagementID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="WaterMeter" label="WaterMeter" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PressureSensor" label="PressureSensor" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PressureMin" label="PressureMin" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="PressureMax" label="PressureMax" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ConnectPeriodWhenWork" label="ConnectPeriodWhenWork" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ConnectPeriodWhenStop" label="ConnectPeriodWhenStop" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="LitreMinCount" label="LitreMinCount" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="LitrePulseCount" label="LitrePulseCount" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Description" label="Description" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ValveType" label="ValveType" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ValveTypeCount" label="ValveTypeCount" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Eeprom" label="Eeprom" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="LastConnection" label="LastConnection" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ValveExit" label="ValveExit" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="MoistureBox" label="MoistureBox" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Tempeture" label="Tempeture" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Voltage" label="Voltage" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="WorkMode" label="WorkMode" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="IsOpen" label="IsOpen" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Error" label="Error" fullWidth />
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

export default Valve;

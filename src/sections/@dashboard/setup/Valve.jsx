import React from 'react';
import { useEffect, useState } from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';
import SuccessAlert from '../../../components/alerts/Alerts';

//service
import InstallationService from '../../../services/InstallationService';

function Valve({setDisabled}) {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    WorkGroupID: '',
    SensorCardID: '',
    TimerManagementID: '',
    Name: '',
    WaterMeter: '',
    PressureSensor: '',
    PressureMin: '',
    PressureMax: '',
    ConnectPeriodWhenWork: '',
    ConnectPeriodWhenStop: '',
    LitreMinCount: '',
    LitrePulseCount: '',
    Description: '',
    ValveType: '',
    ValveTypeCount: '',
    Eeprom: '',
    LastConnection: '',
    ValveExit: '',
    MoistureBox: '',
    Tempeture: '',
    Voltage: '',
    WorkMode: '',
    IsOpen: '',
    Error: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const valveData = {
      WorkGroupID: data.WorkGroupID,
      SensorCardID: data.SensorCardID,
      TimerManagementID: data.TimerManagementID,
      Name: data.Name,
      WaterMeter: data.WaterMeter,
      PressureSensor: data.PressureSensor,
      PressureMin: data.PressureMin,
      PressureMax: data.PressureMax,
      ConnectPeriodWhenWork: data.ConnectPeriodWhenWork,
      ConnectPeriodWhenStop: data.ConnectPeriodWhenStop,
      LitreMinCount: data.LitreMinCount,
      LitrePulseCount: data.LitrePulseCount,
      Description: data.Description,
      ValveType: data.ValveType,
      ValveTypeCount: data.ValveTypeCount,
      Eeprom: data.Eeprom,
      LastConnection: data.LastConnection,
      ValveExit: data.ValveExit,
      MoistureBox: data.MoistureBox,
      Tempeture: data.Tempeture,
      Voltage: data.Voltage,
      WorkMode: data.WorkMode,
      IsOpen: data.IsOpen,
      Error: data.Error,
    };

    await services.addValve(valveData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setDisabled(false);
        setTimeout(() => {
          setApiState(false);
        }, 999999);
      }
    });
  };

  const [handleResult, setResult] = useState({});
  const [apiState, setApiState] = useState(false);

  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Vana Kartı Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!'
            )
          : ''}
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

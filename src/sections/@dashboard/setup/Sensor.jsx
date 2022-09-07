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

function Sensor({setDisabled}) {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    WorkGroupID: '',
    Name: '',
    ConnectPeriodWhenStop: '',
    ConnectPeriodWhenWork: '',
    IrrigationTypes: '',
    DripperRanges: '',
    SensorType: '',
    PlantType: '',
    SensorLocation: '',
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
    const sensorData = {
      WorkGroupID: data.WorkGroupID,
      Name: data.Name,
      ConnectPeriodWhenStop: data.ConnectPeriodWhenStop,
      ConnectPeriodWhenWork: data.ConnectPeriodWhenWork,
      IrrigationTypes: data.IrrigationTypes,
      DripperRanges: data.DripperRanges,
      SensorType: data.SensorType,
      PlantType: data.PlantType,
      SensorLocation: data.SensorLocation,
    };

    await services.addSensor(sensorData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setDisabled(false);
        setSaveDisabled(true);
        setTimeout(() => {
          setApiState(false);
        }, 999999);
      }
    });
  };

  const [saveDisabled, setSaveDisabled] = useState(false)
  const [handleResult, setResult] = useState({});
  const [apiState, setApiState] = useState(false);

  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="WorkGroupID"
            value={data.WorkGroupID}
            onChange={handleChange}
            label="Çalışma Grubu ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" value={data.Name} onChange={handleChange} label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ConnectPeriodWhenStop"
            value={data.ConnectPeriodWhenStop}
            onChange={handleChange}
            label="Kapalıyken Bağlantı Periyodu"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ConnectPeriodWhenWork"
            value={data.ConnectPeriodWhenWork}
            onChange={handleChange}
            label="Çalışma Esnasında Bağlantı Periyodu"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="IrrigationTypes"
            value={data.IrrigationTypes}
            onChange={handleChange}
            label="Sulama Türü"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="DripperRanges"
            value={data.DripperRanges}
            onChange={handleChange}
            label="Sulama Aralığı"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="SensorType"
            value={data.SensorType}
            onChange={handleChange}
            label="Sensör Türü"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="PlantType"
            value={data.PlantType}
            onChange={handleChange}
            label="Bitki Türü"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="SensorLocation"
            value={data.SensorLocation}
            onChange={handleChange}
            label="Sensör Konumu"
            fullWidth
          />
        </Grid>
      </Grid>
      <Stack mt={3}>
        <LoadingButton disabled={saveDisabled} onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default Sensor;

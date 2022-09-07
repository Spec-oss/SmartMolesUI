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

function Pump() {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    ValveID: '',
    SensorCardID: '',
    Name: '',
    ValveManagementType: '',
    PumpManagementType: '',
    PressureSensor: '',
    PressureUpLimit: '',
    PressureDownLimit: '',
    ConnectPeriodWhenWork: '',
    ConnectPeriodWhenStop: '',
    WaterMeter: '',
    LitrePulseCount: '',
    DigitalPump: '',
    Description: '',
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
    const pumpData = {
      ValveID: data.userId,
      SensorCardID: data.contractId,
      Name: data.country,
      ValveManagementType: data.city,
      PumpManagementType: data.distinct,
      PressureSensor: data.street,
      PressureUpLimit: data.postalCode,
      PressureDownLimit: data.coordinates,
      ConnectPeriodWhenWork: data.detailedAddress,
      ConnectPeriodWhenStop: data.creatorCompany,
      WaterMeter: data.creatorStaffName,
      LitrePulseCount: data.simCardNo,
      DigitalPump: data.simCardIp,
      Description: data.modemImei,
    };

    await services.addPump(pumpData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setSaveDisabled(true)
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
        {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Pompa Kartı Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField required name="ValveID" value={data.ValveID} onChange={handleChange} label="ValveID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="SensorCardID"
            value={data.SensorCardID}
            onChange={handleChange}
            label="Sensör Kart ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" value={data.Name} onChange={handleChange} label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ValveManagementType"
            value={data.ValveManagementType}
            onChange={handleChange}
            label="Vana Yönetim Türü"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="PumpManagementType"
            value={data.PumpManagementType}
            onChange={handleChange}
            label="Pompa Yönetim Türü"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="PressureSensor"
            value={data.PressureSensor}
            onChange={handleChange}
            label="Basınç Sensörü"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="PressureUpLimit"
            value={data.PressureUpLimit}
            onChange={handleChange}
            label="Basınç Üst Limit"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="PressureDownLimit"
            value={data.PressureDownLimit}
            onChange={handleChange}
            label="Basınç Alt Limit"
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
            name="WaterMeter"
            value={data.WaterMeter}
            onChange={handleChange}
            label="Su Sayacı"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="LitrePulseCount"
            value={data.LitrePulseCount}
            onChange={handleChange}
            label="Litre Kat Sayısı"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="DigitalPump"
            value={data.DigitalPump}
            onChange={handleChange}
            label="Dijital Pompa"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="Description"
            value={data.Description}
            onChange={handleChange}
            label="Açıklama"
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

export default Pump;

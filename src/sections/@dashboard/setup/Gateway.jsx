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

function Gateway({setDisabled}) {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    SalesID: '',
    UserID: '',
    Name: '',
    Lang: '',
    Lat: '',
    ServerIP: '',
    ServerPort: '',
    GatewayIP: '',
    GatewayPort: '',
    TelitClientPort: '',
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
    const gatewayData = {
      SalesID: data.SalesID,
      UserID: data.UserID,
      Name: data.Name,
      Lang: data.Lang,
      Lat: data.Lat,
      ServerIP: data.ServerIP,
      ServerPort: data.ServerPort,
      GatewayIP: data.GatewayIP,
      GatewayPort: data.GatewayPort,
      TelitClientPort: data.TelitClientPort,
    };

    await services.addGateway(gatewayData).then((e) => {
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
        {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Gateway Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField required name="SalesID" value={data.SalesID} onChange={handleChange} label="Satış ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="UserID"
            value={data.UserID}
            onChange={handleChange}
            label="Kullanıcı ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" value={data.Name} onChange={handleChange} label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Lang" value={data.Lang} onChange={handleChange} label="Lang" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Lat" value={data.Lat} onChange={handleChange} label="Lat" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ServerIP"
            value={data.ServerIP}
            onChange={handleChange}
            label="Server IP"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ServerPort"
            value={data.ServerPort}
            onChange={handleChange}
            label="Server Port"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="GatewayIP"
            value={data.GatewayIP}
            onChange={handleChange}
            label="Gateway IP"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="GatewayPort"
            value={data.GatewayPort}
            onChange={handleChange}
            label="Gateway Port"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="TelitClientPort"
            value={data.TelitClientPort}
            onChange={handleChange}
            label="Telit Client Port"
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

export default Gateway;

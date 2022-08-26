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

function Fields() {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    GatewayID: '',
    Description: '',
    Name: '',
    Lang: '',
    Lat: '',
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
    const fieldData = {
      GatewayID: data.GatewayID,
      Description: data.Description,
      Name: data.Name,
      Lang: data.Lang,
      Lat: data.Lat,
    };

    await services.addFields(fieldData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
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
              'Yeni Tarla Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="GatewayID"
            value={data.GatewayID}
            onChange={handleChange}
            label="Gateway ID"
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
        <Grid item xs={12} md={6}>
          <TextField required name="Name" value={data.Name} onChange={handleChange} label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Lang" value={data.Lang} onChange={handleChange} label="Lang" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="Lat" value={data.Lat} onChange={handleChange} label="Lat" fullWidth />
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

export default Fields;

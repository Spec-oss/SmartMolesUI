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

function Subscription({setDisabled}) {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    userId: '',
    contractId: '',
    country: '',
    city: '',
    distinct: '',
    street: '',
    postalCode: '',
    coordinates: '',
    detailedAddress: '',
    creatorCompany: '',
    creatorCompanyCode: '',
    creatorStaffName: '',
    simCardNo: '',
    simCardIp: '',
    modemImei: '',
    sensorIds: '',
    softwareVersion: '',
    serverIP: '',
    deliveredProductIDs: '',
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
    const subscriptionData = {
      userId: data.userId,
      contractId: data.contractId,
      country: data.country,
      city: data.city,
      distinct: data.distinct,
      street: data.street,
      postalCode: data.postalCode,
      coordinates: data.coordinates,
      detailedAddress: data.detailedAddress,
      creatorCompany: data.creatorCompany,
      creatorCompanyCode: data.creatorCompanyCode,
      creatorStaffName: data.creatorStaffName,
      simCardNo: data.simCardNo,
      simCardIp: data.simCardIp,
      modemImei: data.modemImei,
      sensorIds: data.sensorIds,
      softwareVersion: data.softwareVersion,
      serverIP: data.serverIP,
      deliveredProductIDs: data.deliveredProductIDs,
    };

    await services.addSubscription(subscriptionData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setDisabled(false);
        setDisabled(true);
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
              'Ba??ar??l??!!!',
              'Yeni Abonelik Olu??turma ????lemi Ba??ar??yla Tamamland??!',
              'L??tfen Sonraki Ad??ma Ge??iniz!'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="userId"
            value={data.userId}
            onChange={handleChange}
            label="Kullan??c?? ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="contractId"
            value={data.contractId}
            onChange={handleChange}
            label="S??zle??me ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="country" value={data.country} onChange={handleChange} label="??lke" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="city" value={data.city} onChange={handleChange} label="??ehir" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="distinct"
            value={data.distinct}
            onChange={handleChange}
            label="??l??e"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="street" value={data.street} onChange={handleChange} label="Sokak" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="postalCode"
            value={data.postalCode}
            onChange={handleChange}
            label="Posta Kodu"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="coordinates"
            value={data.coordinates}
            onChange={handleChange}
            label="Kordinatlar"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            name="detailedAddress"
            value={data.detailedAddress}
            onChange={handleChange}
            label="Tam Adres"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="creatorCompany"
            value={data.creatorCompany}
            onChange={handleChange}
            label="Olu??turan ??irket"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="creatorCompanyCode"
            value={data.creatorCompanyCode}
            onChange={handleChange}
            label="Olu??turan ??irket Kodu"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="creatorStaffName"
            value={data.creatorStaffName}
            onChange={handleChange}
            label="Olu??turan Personel"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="simCardNo"
            value={data.simCardNo}
            onChange={handleChange}
            label="Sim Kart No"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="simCardIp"
            value={data.simCardIp}
            onChange={handleChange}
            label="Sim Kart IP"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="sensorIds"
            value={data.sensorIds}
            onChange={handleChange}
            label="Sens??r ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="softwareVersion"
            value={data.softwareVersion}
            onChange={handleChange}
            label="Yaz??l??m Versiyon"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="serverIP"
            value={data.serverIP}
            onChange={handleChange}
            label="Server IP"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="deliveredProductIDs"
            value={data.deliveredProductIDs}
            onChange={handleChange}
            label="Teslim Edilen ??r??nler"
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

export default Subscription;

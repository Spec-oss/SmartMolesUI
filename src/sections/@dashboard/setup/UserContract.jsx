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

function UserContract() {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };
  const [data, setData] = useState({
    UserID: '',
    ContractID: '',
    ContractTypeID: '',
    ContractName: '',
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
    const userContractData = {
      UserID: data.UserID,
      ContractID: data.ContractID,
      ContractTypeID: data.ContractTypeID,
      ContractName: data.ContractName,
    };

    await services.addUserContract(userContractData).then((e) => {
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
              'Yeni Sözleşme Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField required name="UserID" label="UserID" value={data.UserID} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="ContractID" label="ContractID" value={data.ContractID} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ContractName"
            label="Adı"
            value={data.ContractName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ContractTypeID"
            label="ContractTypeID"
            value={data.ContractTypeID}
            onChange={handleChange}
            fullWidth
          />
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

export default UserContract;

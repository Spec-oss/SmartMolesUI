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

function ContractType() {

  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong, color, severity) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} color={`${color}`} severity={`${severity}`} />
    );
    
  };

  const [data, setData] = useState({
    name: '',
    title: '',
    subMainTitle: '',
    subContTitle: '',
    description: '',
    mainDescription: '',
    content: '',
    mainContent: '',
    subContent: '',
    altText: '',
    altMainText: '',
    altContentText: '',
    contractTime: '',
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
    const contractTypeData = {
    name: data.name,
    title: data.title,
    subMainTitle: data.subMainTitle,
    subContTitle: data.subContTitle,
    description: data.description,
    mainDescription: data.mainDescription,
    content: data.content,
    mainContent: data.mainContent,
    subContent: data.subContent,
    altText: data.altText,
    altMainText: data.altMainText,
    altContentText: data.altContentText,
    contractTime: data.contractTime,
    };

    await services.addContractType(contractTypeData).then((e) => {
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
//value ????
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
      {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Sözleşme Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!', 'success'
            )
          : alertState('Bilgilendirme!!!', 'Eğer Mevcutta Sözleşmeniz Varsa Bu Adımı', 'Atlayabilirsiniz!', 'warning', 'info')}
        <Grid item xs={12} md={6}>
          <TextField required name="name" value="name" label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="title" value="title" label="Başlık" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="subMainTitle" value="subMainTitle" label="Alt Başlık" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="subContTitle" value="subContTitle" label="Alt İçerik Başlık" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="description" value="description" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="mainDescription" value="mainDescription" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="content" value="content" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="mainContent" value="mainContent" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="subContent" value="subContent" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="altText" value="altText" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="altMainText" value="altMainText" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="altContentText" value="altContentText" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="contractTime" value="contractTime" label="Sözleşme Tarihi" fullWidth />
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

export default ContractType;

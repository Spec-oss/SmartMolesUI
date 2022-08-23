import React from 'react';

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function ContractType() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="Name" label="Ad" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="title" label="Başlık" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="subMainTitle" label="Alt Başlık" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="subContTitle" label="Alt İçerik Başlık" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="description" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="mainDescription" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="content" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="mainContent" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="subContent" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="altText" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="altMainText" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="altContentText" label="Açıklama" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="contractTime" label="Sözleşme Tarihi" fullWidth />
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

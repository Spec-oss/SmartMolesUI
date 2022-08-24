import React from 'react'

//material
import { Stack, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function Subscription() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="userId" label="Kullanıcı ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="contractId" label="Sözleşme ID" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="country" label="Ülke" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="city" label="Şehir" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="distinct" label="distinct" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="street" label="Sokak" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="postalCode" label="Posta Kodu" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="coordinates" label="Kordinatlar" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="detailedAddress" label="Tam Adres" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="creatorCompany" label="Oluşturan Şirket" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="creatorStaffName" label="Oluşturan Personel" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="simCardNo" label="Sim Kart No" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="simCardIp" label="Sim Kart IP" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="sensorIds" label="Sensör ID" fullWidth />
        </Grid>
         <Grid item xs={12} md={6}>
          <TextField required name="softwareVersion" label="Yazılım Versiyon" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="serverIP" label="Server IP" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required name="deliveredProductIDs" label="Teslim Edilen Ürün" fullWidth />
        </Grid>
        </Grid>
        <Stack mt={3}>
        <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
        </Stack>
      
    </FormProvider>
  )
}

export default Subscription
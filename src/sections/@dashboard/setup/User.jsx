import React from 'react';

//material
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';

function User() {
  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Stack spacing={3}>
        <TextField required name="Name" label="Ad" />
        <TextField required name="Surname" label="Soyad" />
        <TextField required name="Mail" label="E-Mail" />
        <TextField
          required
          type="password"
          name="Password"
          label="Şifre"
        />

        <TextField required name="Gsm" label="Gsm" />
        <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default User;

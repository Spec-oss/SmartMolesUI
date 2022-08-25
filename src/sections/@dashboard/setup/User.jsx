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

function User() {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const [data, setData] = useState({
    RoleID: '',
    Name: '',
    Surname: '',
    Mail: '',
    Password: '',
    Gsm: '',
    CitizenShipNum: '',
    Nationality: '',
    CompanyName: '',
    TaxNum: '',
    MersisNo: '',
    Address: '',
    MailIsVerified: '',
    MailVerifiedAt: '',
    Country: '',
    City: '',
    Distinct: '',
    DetailAddress: '',
    PostalCode: '',
    Phone: '',
    CompanyPhone: '',
    HomePhone: '',
    UserType: '',
    IsAdmin: '',
    IsBusiness: '',
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
    const userData = {
      RoleID: '',
      Name: data.Name,
      Surname: data.Surname,
      Mail: data.Mail,
      Password: data.Password,
      Gsm: data.Gsm,
      CitizenShipNum: data.CitizenShipNum,
      Nationality: data.Nationality,
      CompanyName: data.CompanyName,
      TaxNum: data.TaxNum,
      MersisNo: data.MersisNo,
      Address: data.Address,
      MailIsVerified: false,
      MailVerifiedAt: new Date(),
      Country: data.Country,
      City: data.City,
      Distinct: data.Distinct,
      DetailAddress: data.DetailAddress,
      PostalCode: data.PostalCode,
      Phone: data.Phone,
      CompanyPhone: data.CompanyPhone,
      HomePhone: data.HomePhone,
      UserType: 'user',
      IsAdmin: false,
      IsBusiness: data.IsBusiness,
    };

    await services.addUser(userData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setTimeout(() => {
          setApiState(false);
        }, 999999);
      }
    });
  };

  const [user, setUser] = useState({});
  const [handleResult, setResult] = useState({});
  const [apiState, setApiState] = useState(false);

  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Kullanıcı Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Name" label="Ad" value={data.Name} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Surname" label="Soyad" value={data.Surname} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Mail" label="E-Mail" value={data.Mail} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            type="password"
            name="Password"
            label="Şifre"
            value={data.Password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Gsm" label="Gsm" value={data.Gsm} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="CitizenShipNum"
            label="CitizenShipNum"
            value={data.CitizenShipNum}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="Nationality"
            label="Nationality"
            value={data.Nationality}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="CompanyName"
            label="CompanyName"
            value={data.CompanyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="TaxNum" label="TaxNum" value={data.TaxNum} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="MersisNo"
            label="MersisNo"
            value={data.MersisNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Address" label="Address" value={data.Address} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Country" label="Country" value={data.Country} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="City" label="City" value={data.City} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="Distinct"
            label="Distinct"
            value={data.Distinct}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="DetailAddress"
            label="DetailAddress"
            value={data.DetailAddress}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="PostalCode"
            label="PostalCode"
            value={data.PostalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Phone" label="Phone" value={data.Phone} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="CompanyPhone"
            label="CompanyPhone"
            value={data.CompanyPhone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="HomePhone"
            label="HomePhone"
            value={data.HomePhone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="IsBusiness"
            label="IsBusiness"
            value={data.IsBusiness}
            onChange={handleChange}
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

export default User;

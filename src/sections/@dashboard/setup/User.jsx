import React from 'react';
import { useEffect, useState } from 'react';

//material
import { Stack, TextField, Grid, Switch, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';
import SuccessAlert from '../../../components/alerts/Alerts';
import CountrySelect from '../../../components/form-group/ChooseCountry';
//service
import InstallationService from '../../../services/InstallationService';

function User({setDisabled}) {
  const services = new InstallationService();

  const alertState = (title, description, descriptionStrong, severity, color) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} severity={`${severity}`} color={`${color}`} />
    );
  };

  const [bussinessValue, setBussinessValue] = useState(false);

  const switchChange = (event) => {
    setBussinessValue(!bussinessValue);
  };

  const [nationality, setNationality] = useState('');
  const [country, setCountry] = useState('');

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
      Nationality: nationality,
      CompanyName: data.CompanyName,
      TaxNum: data.TaxNum,
      MersisNo: data.MersisNo,
      Address: data.City + '/' + data.Distinct,
      MailIsVerified: false,
      MailVerifiedAt: new Date(),
      Country: country,
      City: data.City,
      Distinct: data.Distinct,
      DetailAddress: data.DetailAddress,
      PostalCode: data.PostalCode,
      Phone: data.Phone,
      CompanyPhone: data.CompanyPhone,
      HomePhone: data.HomePhone,
      UserType: 'user',
      IsAdmin: false,
      IsBusiness: bussinessValue,
    };

    await services.addUser(userData).then((e) => {
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

  const [handleResult, setResult] = useState({});
  const [apiState, setApiState] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(false)

  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        {apiState
          ? alertState(
              'Ba??ar??l??!!!',
              'Yeni Kullan??c?? Olu??turma ????lemi Ba??ar??yla Tamamland??!',
              'L??tfen Sonraki Ad??ma Ge??iniz!',
              'success',
              'success'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField
            required
            type={'text'}
            fullWidth
            name="Name"
            label="Ad"
            value={data.Name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type={'text'}
            fullWidth
            name="Surname"
            label="Soyad"
            value={data.Surname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type={'email'}
            fullWidth
            name="Mail"
            label="E-Mail"
            value={data.Mail}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            type="password"
            name="Password"
            label="??ifre"
            value={data.Password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type={'text'}
            fullWidth
            name="Gsm"
            label="Telefon"
            value={data.Gsm}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CountrySelect label={'Uyru??u'} nationality={nationality} setNationality={setNationality} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CountrySelect label={'??lke Se??iniz'} country={country} setNationality={setCountry} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="City" label="??l" value={data.City} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Distinct" label="??l??e" value={data.Distinct} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="PostalCode"
            label="Posta Kodu"
            value={data.PostalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            fullWidth
            multiline
            name="DetailAddress"
            label="Tam Adres"
            value={data.DetailAddress}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required fullWidth name="Phone" label="Telefon" value={data.Phone} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            name="HomePhone"
            label="Ev Telefonu"
            value={data.HomePhone}
            onChange={handleChange}
          />
        </Grid>
        {!bussinessValue ? (
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              name="CitizenShipNum"
              label="Vatanda??l??k Numaras??"
              value={data.CitizenShipNum}
              onChange={handleChange}
            />
          </Grid>
        ) : (
          ''
        )}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch onChange={switchChange} />}
            label={bussinessValue ? 'Kurumsal' : 'Bireysel'}
            labelPlacement="start"
          />
        </Grid>

        {bussinessValue ? (
          <>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="CompanyName"
                label="??irket Ad??"
                value={data.CompanyName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type={'number'}
                name="TaxNum"
                label="Vergi Numaras??"
                value={data.TaxNum}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="MersisNo"
                label="Mersis Numaras??"
                value={data.MersisNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="CompanyPhone"
                label="??irket Telefonu"
                value={data.CompanyPhone}
                onChange={handleChange}
              />
            </Grid>
          </>
        ) : (
          ''
        )}
      </Grid>
      <Stack mt={3}>
        <LoadingButton disabled={saveDisabled} onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default User;

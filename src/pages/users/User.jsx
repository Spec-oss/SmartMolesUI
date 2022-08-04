import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { FormProvider } from '../../components/hook-form';

//mock
import { columns } from '../../mock/user/userColumn';
import { options } from '../../mock/user/userOptions';

//service
import UserService from '../../services/UserService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius:'16px',
  boxShadow: 24,
  p: 4,
};

const Users = () => {

  const services = new UserService();

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
    Country: '',
    City: '',
    Distinct: '',
    DetailAddress: '',
    PostalCode: '',
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
    CitizenShipNum: '',
    Nationality: '',
    CompanyName: '',
    TaxNum: '',
    MersisNo: '',
    Address: '',
    MailIsVerified: true,
    Country: '',
    City: '',
    Distinct: '',
    DetailAddress: '',
    PostalCode: '',
    CompanyPhone: '',
    HomePhone: '',
    UserType: '',
    IsAdmin: true,
    IsBusiness: true,
    };

    await services.addUser(userData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [user, setUser] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getUser().then((result) => setUser(result.data));
  };
  useEffect(() => {
    getData();
  }, []);
    
  return (
    <Page title="Müşteriler">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Müşteri Yönetimi
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            component={RouterLink}
            to=""
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Yeni Kayıt Ekle
          </Button>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Typography textAlign={'center'} variant="subtitle1" gutterBottom component="div">
              Yeni Kayıt Ekle
            </Typography>
            <FormProvider onSubmit={(e) => onSubmit(e)}>
              <Stack spacing={3}>
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="Name"
                  label="Ad"
                  value={data.Name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="Surname"
                  label="Soyad"
                  value={data.Surname}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="Mail"
                  label="E-Mail"
                  value={data.Mail}
                  onChange={handleChange}
                />
                <TextField
                  required
                  type="password"
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="Password"
                  label="Şifre"
                  value={data.Password}
                  onChange={handleChange}
                />
               
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="Gsm"
                  label="Gsm"
                  value={data.Gsm}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'Kullanıcılar'} data={user.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default Users;

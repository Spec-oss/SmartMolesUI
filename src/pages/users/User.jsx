import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField, CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { FormProvider } from '../../components/hook-form';
import SuccessAlert from '../../components/alerts/Alerts';

//mock
import { options } from '../../mock/MuiTableOptions';

//service
import UserService from '../../services/UserService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '16px',
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
      CitizenShipNum: '',
      Nationality: '',
      CompanyName: '',
      TaxNum: '',
      MersisNo: '',
      Address: '',
      MailIsVerified: false,
      MailVerifiedAt: new Date(),
      Country: '',
      City: '',
      Distinct: '',
      DetailAddress: '',
      PostalCode: '',
      Phone: '',
      CompanyPhone: '',
      HomePhone: '',
      UserType: '',
      IsAdmin: false,
      IsBusiness: true,
    };

    await services.addUser(userData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        setApiState(true);
        setTimeout(() => {
          setApiState(false);
        }, 3000);
        handleClose();
      }
    });
  };

  const [user, setUser] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(true);

  const handleDeleted = (e) => {
    e.preventDefault();
    console.log(isDeleted);
    setIsDeleted(!isDeleted);
    if (isDeleted) {
      services.getUserNonCondition().then((result) => setUser(result.data));
    } else {
      services.getUser().then((result) => setUser(result.data));
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getUser().then((result) => setUser(result.data));
    setLoading(false)
  };

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const CircularLoading = () =>{ 
  return(
    <CircularProgress
      size={70}
      sx={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    />
  );
    };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: 'Name',
      label: 'Ad',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Surname',
      label: 'Soyad',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Mail',
      label: 'E-mail',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Gsm',
      label: 'Telefon',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'ContentID',
      label: 'Detaylar',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Button
              variant="contained"
              size="small"
              to={'/dashboard/user-detail/userID=' + user.data[dataIndex].ContentID}
              LinkComponent={RouterLink}
            >
              Detaylar
            </Button>
          );
        },
      },
    },
    {
      name: 'isDeleted',
      label: ' ',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return user.data[dataIndex].isDeleted ? (
            <Iconify style={{color:"#1c1b18", width: '40px', height: '40px' }} icon="mdi:account-cancel" />
          ) : (
            <Iconify style={{color:"#2065d1", width: '40px', height: '40px' }} icon="mdi:account-check" />
          );
        },
      },
    },
  ];

  return (
    <Page title="Müşteriler">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Müşteri Yönetimi
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button
              onClick={(e) => handleDeleted(e)}
              variant="contained"
              color={isDeleted ? 'warning' : 'error'}
              component={RouterLink}
              to=""
              startIcon={<Iconify icon={isDeleted ? 'mdi:delete' : 'mdi:eye-off'} />}
            >
              {isDeleted ? 'Silinenleri Getir' : 'Silinenleri Gizle'}
            </Button>
            &nbsp;&nbsp;
            <Button
              onClick={handleOpen}
              variant="contained"
              component={RouterLink}
              to=""
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Kayıt Ekle
            </Button>
          </Stack>
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
        {apiState ? alertState('Başarılı!!!', 'Yeni Kullanıcı Oluşturma İşlemi', 'Başarıyla Tamamlandı!!') : ''}
        <br />
        {loading ? CircularLoading():<MuiTable title={'Kullanıcılar'} data={user.data} columns={columns} options={options} />}
      </Container>
    </Page>
  );
};
export default Users;

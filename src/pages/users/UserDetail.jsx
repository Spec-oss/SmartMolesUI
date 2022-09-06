// react
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// material
import {
  Container,
  Stack,
  Typography,
  Grid,
  Divider,
  Button,
  Fade,
  Modal,
  Box,
  Backdrop,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import MenuCard from '../../components/card/MenuCard';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import SuccessAlert from '../../components/alerts/Alerts';

// services
import UserService from '../../services/UserService';

// ----------------------------------------------------------------------

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

export default function UserDetail(props) {
  const navigate = useNavigate();
  const services = new UserService();
  const [dataFinal, setData] = useState({
    ContentID: '',
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

  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const [apiState, setApiState] = useState(false);

  const [loading, setLoading] = useState(false);

  let { userID } = useParams();
  const onDelete = async (userID) => {
    const deleted = services.deleteUser(userID);
    if ((await deleted).status == 200) {
      handleClose();
      navigate('/dashboard/user');
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const update = async (userID) =>{
   const updated = await services.updateUser(userID, user);
   if (updated.status==200) {
    handleEditClose()
    setApiState(true);
    setTimeout(() => {
      setApiState(false);
    }, 3000);
   }
  }
  useEffect(() => {
    const fetchData = async (userID) => {
      return await services.getByUserId(userID);
    };
    fetchData(userID).then((data) => {
      setUser(data.data.data);
      setTimeout(() => {
      }, 3000);
      console.log(userID)
    });
  }, []);

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const products = [['Smart Capillarity'], ['Smart Root']];
  const settings = [
    ['Gateway'],
    ['Raporlar'],
    ['Sözleşmeler'],
    ['Kullanıcı İzinleri'],
    ['Sim Kartlar'],
    ['Modem Kayıtları'],
  ];
  const logs = [
    ['Gateway Logları'],
    ['Çalışma Grubu Logları'],
    ['Nem Logları'],
    ['Kalibrasyon Logları'],
    ['Sensör Kartı Logları'],
    ['Timer Logları'],
    ['Pompa Kartı Logları'],
    ['Vana Kartı Logları'],
  ];
  const paths = [
    ['https://www.smartmoles.com/uploads/files/logo/450x450/smart-capillarity.png'],
    ['https://www.smartmoles.com/uploads/files/logo/450x450/smart-root.png'],
  ];
  const settingsPaths = [
    ['/static/menu/gateway.jpg'],
    ['/static/menu/raporlar.jpg'],
    ['/static/menu/sozlesmeler.jpg'],
    ['/static/menu/kullanici-izinleri.jpg'],
    ['/static/menu/sim-kart.jpg'],
    ['/static/menu/modem-kayitlari.jpg'],
  ];

  const logPaths = [
    ['/static/menu/gateway-loglari.jpg'],
    ['/static/menu/calisma-grubu-loglari.jpg'],
    ['/static/menu/nem-loglari.jpg'],
    ['/static/menu/kalibrasyon-loglari.jpg'],
    ['/static/menu/sensor-karti-loglari.jpg'],
    ['/static/menu/timer-loglari.jpg'],
    ['/static/menu/pompa-karti-loglari.jpg'],
    ['/static/menu/vana-karti-loglari.jpg'],
  ];

  const toProduct = [['/dashboard/capillarity/detail'], ['/dashboard/root/detail']];

  const to = [
    ['/dashboard/gateway/userID='+userID],
    ['/dashboard/report'],
    ['/dashboard/contract/userID='+userID],
    ['/dashboard/permissions'],
    ['/dashboard/simcards'],
    ['/dashboard/modem-records'],
  ];

  const toLog = [
    ['/dashboard/gateway-logs'],
    ['/dashboard/work-groups-logs'],
    ['/dashboard/sensor-moisture-logs'],
    ['/dashboard/sensor-calibration-logs'],
    ['/dashboard/sensor-card-logs'],
    ['/dashboard/timer-management-logs'],
    ['/dashboard/pump-card-logs'],
    ['/dashboard/valve-card-logs'],
  ];
  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" gutterBottom>
            {user.Name} {user.Surname} Adlı Kullanıcının Hizmet Sayfası
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button onClick={handleEditOpen} sx={{ mr: 2 }} variant="contained" to="" startIcon={<Iconify icon="material-symbols:edit" />}>
              Bilgileri Düzenle
            </Button>
            <Modal
              open={editOpen}
              onClose={handleEditClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography textAlign={'center'} variant="subtitle1" gutterBottom component="div">
                  Yeni Kayıt Ekle
                </Typography>
                  <Stack spacing={3}>
                    <TextField
                      required
                      style={{ backgroundColor: 'white', borderRadius: 10 }}
                      name="Name"
                      label="Ad"
                      value={user.Name}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      style={{ backgroundColor: 'white', borderRadius: 10 }}
                      name="Surname"
                      label="Soyad"
                      value={user.Surname}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      style={{ backgroundColor: 'white', borderRadius: 10 }}
                      name="Mail"
                      label="E-Mail"
                      value={user.Mail}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      style={{ backgroundColor: 'white', borderRadius: 10 }}
                      name="Gsm"
                      label="Gsm"
                      value={user.Gsm}
                      onChange={handleChange}
                    />
                    <LoadingButton
                      onClick={() => update(userID)}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Kaydet
                    </LoadingButton>
                  </Stack>
              </Box>
            </Modal>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="error"
              to=""
              startIcon={<Iconify icon="mdi:delete-forever" />}
            >
              Kayıt Sil
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography textAlign={'center'} id="transition-modal-title" variant="subtitle2" component="h2">
                    {user.Name} {user.Surname} adlı kayıt silinecektir!
                  </Typography>
                  <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                    <Button sx={{ mr: 2 }} onClick={() => onDelete(userID)} variant="outlined" color="error">
                      Sil
                    </Button>
                    <Button sx={{ ml: 2 }} onClick={handleClose} variant="outlined" color="info">
                      Vazgeç
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
          </Stack>
        </Stack>
        {apiState ? alertState('Başarılı!!!', 'Güncelleme İşlemi', 'Başarıyla Tamamlandı!!') : ''}
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }} />
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Ürünler
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <MenuCard title={product} path={paths[index]} to={toProduct[index]} />
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }} />
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Müşteri Ayarları
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          {settings.map((setting, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <MenuCard title={setting} path={settingsPaths[index]} to={to[index]} />
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }} />
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Müşteri Logları
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          {logs.map((log, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <MenuCard title={log} path={logPaths[index]} to={toLog[index]} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}

// react
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// material
import { Container, Stack, Typography, Grid, Divider, Button, Fade, Modal, Box, Backdrop } from '@mui/material';

// components
import MenuCard from '../../components/card/MenuCard';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// services
import UserService from '../../services/UserService';

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

export default function UserDetail(props) {
  const location = useLocation();

  const services = new UserService();
  const [dataFinal, setData] = useState({
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(false);

  const getData = async (userID) => {
    setLoading(false);
    const data = await services.getByUserId(userID);
    setData({
      ...data,
      dataFinal,
    });
  };

  let { userID } = useParams();
  const onDelete = async (userID) => {
    console.log(userID);
    services.deleteUser(userID);
  };
  console.log(userID);

  useEffect(() => {
    const fetchData = async (userID) => {
      return await services.getByUserId(userID);
    };

    fetchData(userID).then((data) => {
      setUser(data.data.data);
      setTimeout(() => {
        console.log(user);
      }, 3000);
    });
  }, []);

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
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppQ?ver=7215'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEaN?ver=9f5b'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqHi?ver=6ef6'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE53r3l?ver=5412'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE53ei4?ver=b8a9'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqHk?ver=3198'],
  ];

  const logPaths = [
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEag?ver=1497'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqI5?ver=bfb7'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wHfZ?ver=4a32'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtcs?ver=79d7'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppt?ver=bc05'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtcY?ver=795c'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtcW?ver=a66d'],
    ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtC?ver=b327'],
  ];

  const toProduct = [['/dashboard/capillarity/detail'], ['/dashboard/root/detail']];

  const to = [
    ['/dashboard/gateway'],
    ['/dashboard/report'],
    ['/dashboard/contract'],
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
            <Button sx={{ mr: 2 }} variant="contained" to="" startIcon={<Iconify icon="material-symbols:edit" />}>
              Bilgileri Düzenle
            </Button>
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
                  <Stack sx={{mt:5}} direction="row" alignItems="center" justifyContent="space-evenly">
                    <Button sx={{ mr: 2 }}
                    onClick={() => onDelete(userID)} 
                    variant="outlined"
                    color="error">
                      Sil
                    </Button>
                    <Button sx={{ ml: 2 }}
                    onClick={handleClose}
                    variant="outlined"
                    color="info">
                      Vazgeç
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
          </Stack>
        </Stack>
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

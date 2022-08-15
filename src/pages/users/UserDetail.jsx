// material
import { Container, Stack, Typography, Grid, Divider, Button } from '@mui/material';

// components
import MenuCard from 'src/components/card/MenuCard';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function UserDetail() {
  const products = [['Smart Capillarity'], ['Smart Root']];
  const settings = [
    ['Gateway'],
    ['Raporlar'],
    ['Sözleşmeler'],
    ['Kullanıcı İzinleri'],
    ['Sim Kartlar'],
    ['Modem Kayıtları']
  ];
  const logs = [
    ['Gateway Logları'],
    ['Çalışma Grubu Logları'],
    ['Nem Logları'],
    ['Kalibrasyon Logları'],
    ['Sensör Kartı Logları'],
    ['Timer Logları'],
    ['Pompa Kartı Logları'],
    ['Vana Kartı Logları']
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

  const toProduct =[['/dashboard/capillarity/detail'],['/dashboard/root/detail']]

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
             {'{Kullanıcı Adı}'}
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Button sx={{mr:2}}
            variant="contained"
            to=""
            startIcon={<Iconify icon="material-symbols:edit" />}
          >
            Bilgileri Düzenle
          </Button>
          <Button
            variant="contained"
            color="error"
            to=""
            startIcon={<Iconify icon="mdi:delete-forever" />}
          >
            Kayıt Sil
          </Button>
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

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
    ['Modem Kayıtları'],
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
  const toProduct =[['/dashboard/capillarity/detail'],['/dashboard/root/detail']]

  const to = [
    ['/dashboard/gateway'],
    ['/dashboard/report'],
    ['/dashboard/contract'],
    ['/dashboard/permissions'],
    ['/dashboard/simcards'],
    ['/dashboard/modem-records'],
  ];
  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" gutterBottom>
             {'{Kullanıcı Adı}'}
          </Typography>
          <Button
            variant="contained"
            to=""
            startIcon={<Iconify icon="material-symbols:edit" />}
          >
            Bilgileri Düzenle
          </Button>
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
      </Container>
    </Page>
  );
}

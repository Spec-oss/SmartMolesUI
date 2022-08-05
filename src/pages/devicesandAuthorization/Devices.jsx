// material
import { Container, Stack, Typography, Grid } from '@mui/material';

// components
import MenuCard from 'src/components/card/MenuCard';
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Devices() {
  const titles = [
    ["Cihaz Türleri"],
    ["Cihaz Konumları"],
    ["Pompa Yönetim Türleri"],
    ["Sim Kartlar"],
    ["Modem Kayıtları"],
    ["Kullanıcı Yetkileri"]
  ];
  const to = [
    ['/dashboard/device-types'],
    ['/dashboard/device-locations'],
    ['/dashboard/pump-management-types'],
    ['/dashboard/simcards'],
    ['/dashboard/modem-records'],
    ['/dashboard/device-locations']
  ];
  const paths = [
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtR?ver=4d2d"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6z?ver=eddc"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqGK?ver=47a4"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppQ?ver=7215"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEaN?ver=9f5b"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqHi?ver=6ef6"]
  ];
  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Typography variant="h5" style={{textAlign:'center'}}>
          Cihazlar ve Yetkilendirme
        </Typography>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}/>
        <Grid container spacing={3}>
        {titles.map((title,index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <MenuCard title={title} path={paths[index]} to={to[index]} />
          </Grid>))}
        </Grid>
      </Container>
    </Page>
  );
}

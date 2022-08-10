// material
import { Container, Stack, Typography, Grid } from '@mui/material';

// components
import MenuCard from 'src/components/card/MenuCard';
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Settings() {
  const titles = [
    ["Bitki Türleri"],
    ["Sulama Türleri"],
    ["Sistem Parametreleri"],
    ["Cihaz Türleri"],
    ["Cihaz Konumları"],
    ["Pompa Yönetim Türleri"]
  ];
  const paths = [
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtR?ver=4d2d"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6z?ver=eddc"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqGK?ver=47a4"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppQ?ver=7215"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEaN?ver=9f5b"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqHi?ver=6ef6"]
  ];
  const to = [
    ["/dashboard/plants"],
    ["/dashboard/irrigation-types"],
    ["/dashboard/settings/#"],
    ["/dashboard/device-types"],
    ["/dashboard/device-locations"],
    ["/dashboard/pump-management-types"]
  ]
  return (
    <Page title="Ayarlar">
      <Container maxWidth="xxl">
        <Typography variant="h5" style={{textAlign:'center'}}>
          Ayarlar
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

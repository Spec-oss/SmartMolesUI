// material
import { Container, Stack, Typography, Grid } from '@mui/material';

// components
import MenuCard from 'src/components/card/MenuCard';
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Devices() {
  const titles = [
    ["Bitki Türleri"],
    ["Sulama Türleri"],
    ["Sistem Parametreleri"],
  ];
  const paths = [
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtR?ver=4d2d"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6z?ver=eddc"],
    ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqGK?ver=47a4"],
  ];
  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Typography variant="h5" style={{textAlign:'center'}}>
          Ayarlar
        </Typography>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}/>
        <Grid container spacing={3}>
        {titles.map((title,index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <MenuCard title={title} path={paths[index]} />
          </Grid>))}
        </Grid>
      </Container>
    </Page>
  );
}

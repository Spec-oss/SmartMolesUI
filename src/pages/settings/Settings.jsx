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
    ["/static/menu/bitki-turleri.jpg"],
    ["/static/menu/sulama-turleri.jpg"],
    ["/static/menu/sistem-parametreleri.jpg"],
    ["/static/menu/cihaz-turleri.jpg"],
    ["/static/menu/cihaz-turleri.jpg"],
    ["/static/menu/sulama-turleri.jpg"]
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

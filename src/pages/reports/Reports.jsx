// material
import { Container, Stack, Typography, Grid } from '@mui/material';

// components
import MenuCard from 'src/components/card/MenuCard';
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Report() {
  const titles = [
    ["KHAS Raporları"],
    ["HUB Raporları"],
    ["Sulama Raporları"],
    ["Hata Raporları"],
    ["Müşteri Raporları"]
  ];
  const path = [
    ["/static/menu/khas-raporlari.jpg"],
    ["/static/menu/hub-raporlari.jpg"],
    ["/static/menu/sulama-raporlari.jpg"],
    ["/static/menu/hata-raporlari.jpg"],
    ["/static/menu/musteri-raporlari.jpg"]
  ];
  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Raporlar
        </Typography>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }} />
        <Grid container spacing={3}>
        {titles.map((title,index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <MenuCard title={title} path={path[index]} />
          </Grid>))}
        </Grid>
      </Container>
    </Page>
  );
}

// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import { ProductList } from '../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../mock/products';

// ----------------------------------------------------------------------

export default function Devices() {

  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Typography variant="h5" style={{textAlign:'center'}}>
          Cihazlar ve Yetkilendirme
        </Typography>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}/>
        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}

// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import { ProductList } from '../../sections/@dashboard/products';
// mock
import PRODUCTS from '../../mock/products';

// ----------------------------------------------------------------------

export default function Report() {

  return (
    <Page title="Dashboard: Test">
      <Container maxWidth="xxl">
        <Typography variant="h4">
          Raporlar
        </Typography>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}/>
        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}

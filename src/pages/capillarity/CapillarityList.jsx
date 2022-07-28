import { Link as RouterLink } from 'react-router-dom';

//material
import {Stack, Button, Container, Typography } from '@mui/material';

//hooks
import useFetch from '../../hooks/useFetch';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

//mock
import { columns } from '../../mock/user/userColumn';
import { options } from '../../mock/user/userOptions';

const CapillarityList = () => {
  const { data, loading, error, reFetch } = useFetch(
    process.env.REACT_APP_API_URL_NEW + 'gateway');
    
  return (
    <Page title="User">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Smart Capillarity
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Yeni Kayıt Ekle
          </Button>
        </Stack>
        <MuiTable title={'Capillarity Listesi'} data={data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default CapillarityList;

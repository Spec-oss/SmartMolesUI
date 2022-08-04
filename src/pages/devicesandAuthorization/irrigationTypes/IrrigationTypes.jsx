import { Link as RouterLink } from 'react-router-dom';

//material
import {Stack, Button, Container, Typography } from '@mui/material';

//hooks
import useFetch from '../../../hooks/useFetch';

// component
import MuiTable from '../../../components/tables/Table';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';

//mock
import { columns } from '../../../mock/devicesandAuthorization/irrigationTypes/irrigationTypesColumn';
import { options } from '../../../mock/devicesandAuthorization/irrigationTypes/irrigationTypesOptions';

const DeviceLocations = () => {
    const { data, loading, error, reFetch } = useFetch(
      "http://192.168.1.33:3000/v1/api/irrigation-types");
      
    return (
      <Page title="Cihaz Türleri">
        <Container maxWidth="xxl">
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h5" gutterBottom>
              Sulama Türleri
            </Typography>
            <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
              Yeni Kayıt Ekle
            </Button>
          </Stack>
          <MuiTable title={'Sulama Türleri'} data={data} columns={columns} options={options} />
        </Container>
      </Page>
    );
  };
  export default DeviceLocations;
  
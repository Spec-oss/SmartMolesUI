import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/gatewayLogsColumn';
import { options } from '../../mock/MuiTableOptions';

//service
import GatewayLogsService from '../../services/GatewayLogsService';

const GatewayLogs = () => {
  const services = new GatewayLogsService();

  const [gatewayLogs, setGatewayLogs] = useState({});

  const getData = () => {
    services.getGatewayLog().then((result) => setGatewayLogs(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Gateway Logları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Gateway Logları
          </Typography>
        </Stack>
        <MuiTable title={'Gateway Logları'} data={gatewayLogs.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default GatewayLogs;

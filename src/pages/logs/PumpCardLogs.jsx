import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/pumpCardLogsColumn';
import { options } from '../../mock/MuiTableOptions';

//service
import PumpCardLogsService from '../../services/PumpCardLogsService';

const PumpCardLogs = () => {
  const services = new PumpCardLogsService();

  const [pumpCardLogs, setPumpCardLogs] = useState({});

  const getData = () => {
    services.getPumpCardLogs().then((result) => setPumpCardLogs(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Pompa Kartı Logları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Pompa Kartı Logları
          </Typography>
        </Stack>
        <MuiTable title={'Pompa Kartı Logları'} data={pumpCardLogs.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default PumpCardLogs;

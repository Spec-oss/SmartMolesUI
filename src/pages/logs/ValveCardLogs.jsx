import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/valveCardLogsColumn';
import { options } from '../../mock/MuiTableOptions';

//service
import ValveCardsLogsService from '../../services/ValveCardsLogsService';

const ValveCardLogs = () => {
  const services = new ValveCardsLogsService();

  const [valveCardsLogs, setValveCardsLogs] = useState({});

  const getData = () => {
    services.getValveCardsLog().then((result) => setValveCardsLogs(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Sim Kartları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Vana Kartları Log
          </Typography>
        </Stack>
        <MuiTable title={'Gateway Logları'} data={valveCardsLogs.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default ValveCardLogs;

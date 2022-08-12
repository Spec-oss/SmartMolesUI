import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/timerManagementLogsColumn';
import { options } from '../../mock/MuiTableOptions';

//service
import TimerManagementLogsService from '../../services/TimerManagementLogsService';

const TimerManagementLogs = () => {
  const services = new TimerManagementLogsService();

  const [timerManagementLogs, setTimerManagementLogs] = useState({});

  const getData = () => {
    services.getTimerManagementLog().then((result) => setTimerManagementLogs(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Sim Kartları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Gateway Logları
          </Typography>
        </Stack>
        <MuiTable title={'Gateway Logları'} data={timerManagementLogs.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default TimerManagementLogs;

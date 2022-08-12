import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/sensorCardLogsColumn';
import { options } from '../../mock/MuiTableOptions';

//service
import SensorCardLogService from '../../services/SensorCardLogService';

const SensorCardLogs = () => {
  const services = new SensorCardLogService();

  const [sensorCardLog, setSensorCardLog] = useState({});

  const getData = () => {
    services.getSensorCardLog().then((result) => setSensorCardLog(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Sensör Kartları Log">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Sensör Kartları Logları
          </Typography>
        </Stack>
        <MuiTable title={'Sensör Kartları Logları'} data={sensorCardLog.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default SensorCardLogs;

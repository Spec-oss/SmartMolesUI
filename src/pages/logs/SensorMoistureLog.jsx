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
import SensorMoistureLogService from '../../services/SensorMoistureLogService';

const SensorMoistureLog = () => {
  const services = new SensorMoistureLogService();

  const [sensorMoistureLog, setSensorMoistureLog] = useState({});

  const getData = () => {
    services.getSensorMoistureLog().then((result) => setSensorMoistureLog(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Sim Kartları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Sensor Moisture Log
          </Typography>
        </Stack>
        <MuiTable title={'Sensor Moisture Logları'} data={sensorMoistureLog.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default SensorMoistureLog;

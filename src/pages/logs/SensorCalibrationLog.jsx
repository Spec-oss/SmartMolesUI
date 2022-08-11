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
import SensorCalibrationLogService from '../../services/SensorCalibrationLogService';

const SensorCalibrationLog = () => {
  const services = new SensorCalibrationLogService();

  const [sensorCalibrationLog, setSensorCalibrationLog] = useState({});

  const getData = () => {
    services.getSensorCalibrationLog().then((result) => setSensorCalibrationLog(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Sim Kartları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Sensör Kalibrasyon Log
          </Typography>
        </Stack>
        <MuiTable title={'Gateway Logları'} data={sensorCalibrationLog.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default SensorCalibrationLog;

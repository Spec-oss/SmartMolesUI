import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography, TableCell, TableRow } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/sensorCalibrationLogColumn';

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

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: () => {
      return true;
    },
    renderExpandableRow: (rowData) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>Data: {JSON.stringify(rowData)}</TableCell>
        </TableRow>
      );
    },
  };

  return (
    <Page title="Sensör Kalibrasyon Logları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Sensör Kalibrasyon Logları
          </Typography>
        </Stack>
        <MuiTable title={'Sensör Kalibrasyon Logları'} data={sensorCalibrationLog.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default SensorCalibrationLog;

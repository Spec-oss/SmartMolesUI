import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography, TableCell, TableRow } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/sensorMoistureLogColumn';

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
    <Page title="Nem Logları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Sensor Nem Logları
          </Typography>
        </Stack>
        <MuiTable title={'Sensor Nem Logları'} data={sensorMoistureLog.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default SensorMoistureLog;

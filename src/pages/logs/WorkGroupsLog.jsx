import { useEffect, useState } from 'react';

//material
import { Stack, Container, Typography } from '@mui/material';

// component
import MuiTable from '../../components/tables/Table';
import Page from '../../components/Page';

//mock
import { columns } from '../../mock/logs/workGroupLogsColumn';
import { options } from '../../mock/MuiTableOptions';

//service
import WorkGroupLogsService from '../../services/WorkGroupLogsService';

const WorkGroupsLog = () => {
  const services = new WorkGroupLogsService();

  const [workGroupLogs, setWorkGroupLogs] = useState({});

  const getData = () => {
    services.getWorkGroupLog().then((result) => setWorkGroupLogs(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Page title="Çalışma Grubu Logları">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
          Çalışma Grubu Logları
          </Typography>
        </Stack>
        <MuiTable title={'Çalışma Grubu Logları'} data={workGroupLogs.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default WorkGroupsLog;

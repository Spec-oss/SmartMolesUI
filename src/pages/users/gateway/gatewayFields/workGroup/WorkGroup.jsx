import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../../../../components/tables/Table';
import Iconify from '../../../../../components/Iconify';
import { FormProvider } from '../../../../../components/hook-form';

//mock
import { options } from '../../../../../mock/MuiTableOptions';

//service
import WorkGroupService from '../../../../../services/WorkGroupService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WorkGroup = () => {
  const services = new WorkGroupService();
  let { gatewayID } = useParams();

  const [data, setData] = useState({
    WorkType: '',
    Name: '',
    Description: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const workGroupData = {
      GatewayID: gatewayID,
      WorkType: data.WorkType,
      Name: data.Name,
      Description: data.Description,
    };

    await services.addWorkGroup(workGroupData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [workGroup, setWorkGroup] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getByGatewayId(gatewayID).then((result) => setWorkGroup(result.data));
  };
  useEffect(() => {
    getData();
    console.log(workGroup.data)
  }, []);

  const columns = [
    {
      name: 'Name',
      label: 'Ad',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Description',
      label: 'Açıklama',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'WorkType',
      label: 'Çalışma',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'contentId',
      label: 'Detaylar',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
              <Button
              variant="contained"
              size="small"
              to={`/dashboard/workgroup-detail/workGroupID=` + workGroup.data[dataIndex].contentId}
              LinkComponent={RouterLink}
            >
              Detaylar
            </Button>
          );
        },
      },
    },
  ];

  return (
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={5} mb={5}>
          <Typography variant="h5" gutterBottom>
            WorkGroup Kayıtları
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            component={RouterLink}
            to=""
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Yeni Kayıt Ekle
          </Button>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography textAlign={'center'} variant="subtitle1" gutterBottom component="div">
              Yeni Kayıt Ekle
            </Typography>
            <FormProvider onSubmit={(e) => onSubmit(e)}>
              <Stack spacing={3}>
              <TextField
                  required
                  name="Description"
                  label="Açıklama"
                  value={data.Description}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="Name"
                  label="Ad"
                  value={data.Name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="WorkType"
                  label="Çalışma Türü"
                  value={data.WorkType}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'WorkGroup'} data={workGroup.data} columns={columns} options={options} />
      </Container>
  );
};
export default WorkGroup;

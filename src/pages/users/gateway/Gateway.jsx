import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../../components/tables/Table';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import { FormProvider } from '../../../components/hook-form';

//mock
import { options } from '../../../mock/MuiTableOptions';

//service
import GatewayService from '../../../services/GatewayService';

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

const Gateway = () => {
  const services = new GatewayService();
  let { userID } = useParams();

  const [data, setData] = useState({
    SalesID: '',
    UserID: '',
    Name: '',
    Lang: '',
    Lat: '',
    ServerIP: '',
    ServerPort: '',
    GatewayIP: '',
    GatewayPort: '',
    TelitClientPort: '',
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
    const gatewayData = {
      SalesID: '',
      UserID: userID,
      Name: data.Name,
      Lang: data.Lang,
      Lat: data.Lat,
      ServerIP: data.ServerIP,
      ServerPort: data.ServerPort,
      GatewayIP: data.GatewayIP,
      GatewayPort: data.GatewayPort,
      TelitClientPort: data.TelitClientPort,
    };

    await services.addGateway(gatewayData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [gateway, setGateway] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getByGatewayUserId(userID).then((result) => setGateway(result.data));
  };
  useEffect(() => {
    getData();
    console.log(gateway.data)
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
      name: 'Lang',
      label: 'Lang',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Lat',
      label: 'Lat',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'ServerIP',
      label: 'Server IP',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'ServerPort',
      label: 'Server Port',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'GatewayIP',
      label: 'Gateway IP',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'GatewayPort',
      label: 'Gateway Port',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'TelitClientPort',
      label: 'Telit Client Port',
      options: {
        filter: true,
        sort: false,
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
              to={'/dashboard/gateway-detail/gatewayID=' + gateway.data[dataIndex].contentId}
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
    <Page title="Gateway">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Gateway Kayıtları
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
                  name="Name"
                  label="Ad"
                  value={data.Name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="Lang"
                  label="Lang"
                  value={data.Lang}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="Lat"
                  label="Lat"
                  value={data.Lat}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="ServerIP"
                  label="Server IP"
                  value={data.ServerIP}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="ServerPort"
                  label="Server Port"
                  value={data.ServerPort}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="GatewayIP"
                  label="Gateway IP"
                  value={data.GatewayIP}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="GatewayPort"
                  label="Gateway Port"
                  value={data.GatewayPort}
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="TelitClientPort"
                  label="Telit Client Port"
                  value={data.TelitClientPort}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'Gateway'} data={gateway.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default Gateway;

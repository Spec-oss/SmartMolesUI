import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../../../components/tables/Table';
import Iconify from '../../../../components/Iconify';
import { FormProvider } from '../../../../components/hook-form';

//mock
import { options } from '../../../../mock/MuiTableOptions';

//service
import GatewayFieldService from '../../../../services/GatewayFieldsService';

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

const GatewayFields = () => {
  const services = new GatewayFieldService();
  let { gatewayID } = useParams();

  const [data, setData] = useState({
    Description: '',
    Name: '',
    Lang: '',
    Lat: '',
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
      GatewayID: gatewayID,
      Description: data.Description,
      Name: data.Name,
      Lang: data.Lang,
      Lat: data.Lat,
    };

    await services.addGatewayField(gatewayData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [gatewayField, setGatewayField] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getByGatewayId(gatewayID).then((result) => setGatewayField(result.data));
  };
  useEffect(() => {
    getData();
    console.log(gatewayField.data)
  }, []);

  const columns = [
    {
      name: 'Description',
      label: 'Açıklama',
      options: {
        filter: true,
        sort: false,
      },
    },
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
              to={'/dashboard/gateway-detail/gatewayID=' + gatewayField.data[dataIndex].contentId}
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
            Gateway Field Kayıtları
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
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'Gateway Fields'} data={gatewayField.data} columns={columns} options={options} />
      </Container>
  );
};
export default GatewayFields;

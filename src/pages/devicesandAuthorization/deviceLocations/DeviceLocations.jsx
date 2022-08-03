import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
//hooks
// import useFetch from '../../../hooks/useFetch';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// component
import MuiTable from '../../../components/tables/Table';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import { FormProvider } from '../../../components/hook-form';

//mock
import { columns } from '../../../mock/devicesandAuthorization/deviceLocations/deviceLocationsColumn';
import { options } from '../../../mock/devicesandAuthorization/deviceLocations/deviceLocationsOptions';

//service
import DeviceLocationServices from 'src/services/DeviceLocationService';
import axios from 'axios';

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

const DeviceLocations = () => {
  const navigate = useNavigate();
  const services = new DeviceLocationServices();
  const DeviceLocationsSchema = Yup.object().shape({
    imageUrl: Yup.string().required('Bu alan zorunludur.'),
    titleTR: Yup.string().required('Bu alan zorunludur.'),
  });

  const defaultValues = {
    imageUrl: '',
    titleTR: '',
  };

  const [data, setData] = useState({
    imageUrl: '',
    titleTR: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const methods = useForm({
    resolver: yupResolver(DeviceLocationsSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      ImageUrl: data.imageUrl,
      TitleTR: data.titleTR,
      TitleEN:'',
    };
    axios.post(process.env.REACT_APP_API_URL_NEW + '/devices-location',userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    navigate(0, { replace: true });
  };

  const handleClick = async (e)=>{
    const userData = {
      ImageUrl: data.imageUrl,
      TitleTR: data.titleTR,
      TitleEN:'x',

      
    };
    e.preventDefault();
    const res = await axios.post(process.env.REACT_APP_API_URL_NEW + 
      '/devices-location', userData);
    if(res.status ===201){
      console.log(res.data)
      services.getDeviceLocation().then((result) => setDeviceLocation(result.data));
    }
    else{
      console.log(res.statusText)
    }
  }

  // const { data, loading, error, reFetch } = useFetch('http://192.168.1.33:3000/v1/api/devices-location');
  const [deviceLocation, setDeviceLocation] = useState({});

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    services.getDeviceLocation().then((result) => setDeviceLocation(result.data));
  }, []);

  return (
    <Page title="Cihaz Türleri">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Cihaz Konumları
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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <TextField
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="imageUrl"
                  label="Görsel"
                  value={data.imageUrl}
                  onChange={handleChange}
                />
                <TextField
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="titleTR"
                  label="Adı"
                  value={data.titleTR}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e)=>handleClick(e)} fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'Cihaz Konumları'} data={deviceLocation.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default DeviceLocations;

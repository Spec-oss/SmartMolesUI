import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

//material
import {
  Container,
  Box,
  Stack,
  Fade,
  Modal,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Grid,
  Backdrop,
  Typography,
} from '@mui/material';

// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import DeviceLocationService from '../../../services/DeviceLocationService';
import SuccessAlert from '../../../components/alerts/Alerts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

const DeviceLocationDetail = () => {
  const navigate = useNavigate();
  const services = new DeviceLocationService();
  const [dataFinal, setData] = useState({
    ImageUrl:'',
    TitleTR: '',
  });
  
  const [deviceLocation, setDeviceLocation] = useState({});
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let { deviceLocationID } = useParams();

  const onDelete = async (deviceLocationID) => {
    const deleted = services.deleteDeviceLocation(deviceLocationID);
    if ((await deleted).status == 200) {
      handleClose();
      navigate('/dashboard/device-locations');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...dataFinal,
      [e.target.name]: value,
    });
  };

  const update = async (deviceLocationID) =>{
    setDeviceLocation(dataFinal)
    console.log('first')
    console.log(dataFinal)
    const updated = await services.updateDeviceLocation(deviceLocationID, {
        'ImageUrl':dataFinal.ImageUrl,
        'TitleTR':dataFinal.TitleTR,
    });
    if (updated.status==200) {
     setApiState(true);
     setTimeout(() => {
       setApiState(false);
     }, 3000);
    }
   }

   const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

   useEffect(() => {
     const fetchData = async (deviceLocationID) => {
       return await services.getByDeviceLocationId(deviceLocationID);
     };
     fetchData(deviceLocationID).then((data) => {
        setData(data.data.data);
       setTimeout(() => {
       }, 3000);
     });
   }, []);

  return (
    <Page title="Dashboard: Cihaz Konumlar??">
      <Container maxWidth="xxl">
        <Stack sx={{ mb: 5 }} direction="row" alignItems="center" justifyContent="space-between">
        <Button
            variant="outlined"
            to="/dashboard/device-locations"
            LinkComponent={RouterLink}
            startIcon={<Iconify icon="akar-icons:arrow-back-thick-fill" />}
          >
            Listeye Geri D??n
          </Button>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="error"
            to=""
            startIcon={<Iconify icon="mdi:delete-forever" />}
          >
            Kay??t Sil
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography textAlign={'center'} id="transition-modal-title" variant="subtitle2" component="h2">
                  {dataFinal.TitleTR} adl?? kay??t silinecektir!
                </Typography>
                <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                  <Button sx={{ mr: 2 }} onClick={() => onDelete(deviceLocationID)} variant="outlined" color="error">
                    Sil
                  </Button>
                  <Button sx={{ ml: 2 }} onClick={handleClose} variant="outlined" color="info">
                    Vazge??
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Modal>
        </Stack>
        {apiState ? alertState('Ba??ar??l??!!!', 'G??ncelleme ????lemi', 'Ba??ar??yla Tamamland??!!') : ''}
        <Card sx={{mt:2}}>
          <CardHeader title={dataFinal.TitleTR} />
          <Divider />
          <CardContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="G??rsel"
                  margin="normal"
                  name="ImageUrl"
                  value={dataFinal.ImageUrl}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ad"
                  margin="normal"
                  name="TitleTR"
                  value={dataFinal.TitleTR}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
            }}
          >
            <Button color="primary" variant="contained" type="submit" onClick={() =>update(deviceLocationID)}>
              G??ncelle
            </Button>
          </Box>
        </Card>
      </Container>
    </Page>
  );
};

export default DeviceLocationDetail;

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
import Page from '../../../../components/Page';
import Iconify from '../../../../components/Iconify';
import GatewayFieldsService from '../../../../services/GatewayFieldsService';
import SuccessAlert from '../../../../components/alerts/Alerts';
import WorkGroup from './workGroup/WorkGroup';

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

const GatewayFieldDetail = () => {
  const navigate = useNavigate();
  const services = new GatewayFieldsService();
  const [dataFinal, setData] = useState({
    Description: '',
    Name: '',
    Lang: '',
    Lat: '',
  });
  const [gatewayFields, setGatewayFields] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [apiState, setApiState] = useState(false);

  let { gatewayfieldID, gatewayID } = useParams();
  const onDelete = async (gatewayfieldID) => {
    const deleted = services.deleteGatewayField(gatewayfieldID);
    if ((await deleted).status == 200) {
      handleClose();
      navigate(0);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...dataFinal,
      [e.target.name]: value,
    });
    console.log(value)
  };

  const update = async (gatewayfieldID) =>{
    setGatewayFields(dataFinal)
    console.log('first')
    console.log(dataFinal)
    const updated = await services.updateGatewayField(gatewayfieldID, {
      'Description': dataFinal.Description,
      'Name': dataFinal.Name,
      'Lang': dataFinal.Lang,
      'Lat': dataFinal.Lat,
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
     const fetchData = async (gatewayfieldID) => {
       return await services.getByGatewayFieldId(gatewayfieldID);
     };
     fetchData(gatewayfieldID).then((data) => {
        setData(data.data.data);
       setTimeout(() => {
       }, 3000);
     });
   }, []);

  return (
    <Page title="Dashboard: Gateway Field Detaylar">
      <Container maxWidth="xxl">
        <Stack sx={{ mb: 5 }} direction="row" alignItems="center" justifyContent="space-between">
        <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            LinkComponent={RouterLink}
            startIcon={<Iconify icon="akar-icons:arrow-back-thick-fill" />}
          >
            Listeye Geri Dön
          </Button>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="error"
            to=""
            startIcon={<Iconify icon="mdi:delete-forever" />}
          >
            Kayıt Sil
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
                  {dataFinal.Name} adlı kayıt silinecektir!
                </Typography>
                <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                  <Button sx={{ mr: 2 }} onClick={() => onDelete(gatewayfieldID)} variant="outlined" color="error">
                    Sil
                  </Button>
                  <Button sx={{ ml: 2 }} onClick={handleClose} variant="outlined" color="info">
                    Vazgeç
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Modal>
        </Stack>
        {apiState ? alertState('Başarılı!!!', 'Güncelleme İşlemi', 'Başarıyla Tamamlandı!!') : ''}
        <Card sx={{mt:2}}>
          <CardHeader title={dataFinal.Name} />
          <Divider />
          <CardContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={6}>
              <TextField
                  required
                  fullWidth
                  margin='normal'
                  name="Name"
                  label="Ad"
                  value={dataFinal.Name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin='normal'
                  required
                  name="Description"
                  label="Açıklama"
                  value={dataFinal.Description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin='normal'
                  required
                  name="Lang"
                  label="Lang"
                  value={dataFinal.Lang}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  margin='normal'
                  required
                  name="Lat"
                  label="Lat"
                  value={dataFinal.Lat}
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
            <Button color="primary" variant="contained" type="submit" onClick={() =>update(gatewayfieldID)}>
              Güncelle
            </Button>
          </Box>
        </Card>
      </Container>
      <WorkGroup/>
    </Page>
  );
};

export default GatewayFieldDetail;

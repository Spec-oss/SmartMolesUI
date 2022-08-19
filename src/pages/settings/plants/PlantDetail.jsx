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
import PlantService from '../../../services/PlantsService';
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

const PlantDetail = () => {
  const navigate = useNavigate();
  const services = new PlantService();
  const [dataFinal, setData] = useState({
    TitleEN: '',
    TitleTR: '',
    RootRange: '',
    ActiveRootRange: '',
  });
  const [plant, setPlant] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [apiState, setApiState] = useState(false);

  let { plantID } = useParams();
  const onDelete = async (plantID) => {
    const deleted = services.deletePlant(plantID);
    if ((await deleted).status == 200) {
      handleClose();
      navigate('/dashboard/plants');
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

  const update = async (plantID) =>{
    setPlant(dataFinal)
    console.log('first')
    console.log(dataFinal)
    const updated = await services.updatePlant(plantID, {
        'TitleEN':dataFinal.TitleEN,
        'TitleTR':dataFinal.TitleTR,
        'RootRange':dataFinal.RootRange,
        'ActiveRootRange':dataFinal.ActiveRootRange
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
     const fetchData = async (plantID) => {
       return await services.getByPlantId(plantID);
     };
     fetchData(plantID).then((data) => {
        setData(data.data.data);
       setTimeout(() => {
       }, 3000);
     });
   }, []);

  return (
    <Page title="Dashboard: Bitki Türleri">
      <Container maxWidth="xxl">
        <Stack sx={{ mb: 5 }} direction="row" alignItems="center" justifyContent="space-between">
        <Button
            variant="outlined"
            to="/dashboard/plants"
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
                  {dataFinal.TitleTR} adlı kayıt silinecektir!
                </Typography>
                <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                  <Button sx={{ mr: 2 }} onClick={() => onDelete(plantID)} variant="outlined" color="error">
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
          <CardHeader title={dataFinal.TitleTR} />
          <Divider />
          <CardContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Root Range"
                  margin="normal"
                  name="RootRange"
                  value={dataFinal.RootRange}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Active Root Range"
                  margin="normal"
                  name="ActiveRootRange"
                  value={dataFinal.ActiveRootRange}
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
            <Button color="primary" variant="contained" type="submit" onClick={() =>update(plantID)}>
              Update
            </Button>
          </Box>
        </Card>
      </Container>
    </Page>
  );
};

export default PlantDetail;

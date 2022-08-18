import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField, Backdrop, Fade } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../../components/tables/Table';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import { FormProvider } from '../../../components/hook-form';
import SuccessAlert from '../../../components/alerts/Alerts';

//mock
import { options } from '../../../mock/MuiTableOptions';

//service
import PlantsService from '../../../services/PlantsService';
import { result } from 'lodash';

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

const Plants = () => {
  const services = new PlantsService();

  const [data, setData] = useState({
    ContentID: '',
    TitleEN: '',
    TitleTR: '',
    RootRange: '',
    ActiveRootRange: '',
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
    const PlantData = {
      TitleEN: '',
      TitleTR: data.TitleTR,
      RootRange: data.RootRange,
      ActiveRootRange: data.ActiveRootRange,
    };

    await services.addPlant(PlantData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        setApiState(true);
        setTimeout(() => {
          setApiState(false);
        }, 3000);
        handleClose();
      }
    });
  };

  const onDelete = (id) => {
    services.deletePlant(id)
}

  const [plant, setPlant] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false)

  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = () => {
    services.getPlant().then((result) => setPlant(result.data));
  };
  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  useEffect(() => {
    getData();
    console.log(plant.data)
  }, []);

  const columns = [
    {
      name: 'TitleTR',
      label: 'Ad',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'RootRange',
      label: 'Kök Aralığı',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'ActiveRootRange',
      label: 'Aktif Kök Aralığı',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'ContentID',
      label: ' ',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Stack direction="row" alignItems="center" justifyContent="space-evenly">
              <Button
              variant="contained"
              size="small"
              to={'/dashboard/user-detail/userID=' + plant.data[dataIndex].ContentID}
              LinkComponent={RouterLink}
            >
              Düzenle
            </Button>
            <Button
              variant="contained"
              color='error'
              size="small"
              onClick={handleDeleteOpen}
              LinkComponent={RouterLink}
            >
              Sil
            </Button>
            </Stack>
          );
        },
      },
    },
  ];
  
  return (
    <Page title="Bitki Türleri">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Bitki Türleri
          </Typography>
          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={deleteOpen}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={deleteOpen}>
                <Box sx={style}>
                  <Typography textAlign={'center'} id="transition-modal-title" variant="subtitle2" component="h2">
                    {console.log(plant.data)} adlı kayıt silinecektir!
                  </Typography>
                  <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                    <Button sx={{ mr: 2 }} onClick={() => onDelete(plant.ContentID)} variant="outlined" color="error">
                      Sil
                    </Button>
                    <Button sx={{ ml: 2 }} onClick={handleDeleteClose} variant="outlined" color="info">
                      Vazgeç
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
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
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="TitleTR"
                  label="Adı"
                  value={data.TitleTR}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="RootRange"
                  label="Kök Aralığı"
                  value={data.RootRange}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="ActiveRootRange"
                  label="Aktif Kök Aralığı"
                  value={data.ActiveRootRange}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        {apiState ? alertState('Başarılı!!!', 'Yeni Bitki Türü Oluşturma İşlemi', 'Başarıyla Tamamlandı!!') : ''}
        <br />
        <MuiTable title={'Bitkiler'} data={plant.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default Plants;

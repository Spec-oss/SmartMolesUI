import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//material
import { Stack, Button, Container, Typography, Box, Modal, TextField, Avatar } from '@mui/material';
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
import IrrigationTypesService from '../../../services/IrrigationTypesService';

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

const IrrigationTypes = () => {
  const services = new IrrigationTypesService();

  const [data, setData] = useState({
    ImageUrl: '',
    TitleTR: '',
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
    const IrrigationTypeData = {
      ImageUrl: data.ImageUrl,
      TitleTR: data.TitleTR,
      TitleEN: '',
    };

    await services.addIrrigationType(IrrigationTypeData).then((e) => {
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

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const [irrigationType, setIrrigationType] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getIrrigationType().then((result) => setIrrigationType(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: 'ImageUrl',
      label: 'Görsel',
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Avatar
          alt="Görsel"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
          );
        },
      },
    },
    {
      name: 'TitleTR',
      label: 'Ad',
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
              to={'/dashboard/irrigation-type-detail/irrigationTypeID=' + irrigationType.data[dataIndex].contentId}
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
    <Page title="Sulama Türleri">
      <Container maxWidth="xxl">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button
            variant="outlined"
            to="/dashboard/settings"
            LinkComponent={RouterLink}
            startIcon={<Iconify icon="akar-icons:arrow-back-thick-fill" />}
          >
            Listeye Geri Dön
          </Button>
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
                  name="ImageUrl"
                  label="Görsel"
                  value={data.ImageUrl}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="TitleTR"
                  label="Adı"
                  value={data.TitleTR}
                  onChange={handleChange}
                />
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        {apiState ? alertState('Başarılı!!!', 'Yeni Kayıt Oluşturma İşlemi', 'Başarıyla Tamamlandı!!') : ''}
        <br/>
        <MuiTable title={'Sulama Türleri'} data={irrigationType.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default IrrigationTypes;

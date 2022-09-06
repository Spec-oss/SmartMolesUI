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
import ContractTypeService from '../../../services/ContractTypeService';
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

const ContractTypeDetail = () => {
  const navigate = useNavigate();
  const services = new ContractTypeService();
  const [dataFinal, setData] = useState({
    name: '',
    title: '',
    subMainTitle: '',
    subContTitle: '',
    description: '',
    mainDescription: '',
    content: '',
    mainContent: '',
    subContent: '',
    altText: '',
    altMainText: '',
    altContentText: '',
    contractTime: '',
  });

  const [contractType, setContractType] = useState({});
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let { contractTypeID } = useParams();

  const onDelete = async (contractTypeID) => {
    const deleted = services.deleteContractType(contractTypeID);
    if ((await deleted).status == 200) {
      handleClose();
      navigate('/dashboard/contract-types');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...dataFinal,
      [e.target.name]: value,
    });
  };

  const update = async (contractTypeID) => {
    setContractType(dataFinal);
    const updated = await services.updateContractType(contractTypeID, {
      name: dataFinal.name,
      title: dataFinal.title,
      subMainTitle: dataFinal.subMainTitle,
      subContTitle: dataFinal.subContTitle,
      description: dataFinal.description,
      mainDescription: dataFinal.mainDescription,
      content: dataFinal.content,
      mainContent: dataFinal.mainContent,
      subContent: dataFinal.subContent,
      altText: dataFinal.altText,
      altMainText: dataFinal.altMainText,
      altContentText: dataFinal.altContentText,
    });
    if (updated.status == 200) {
      setApiState(true);
      setTimeout(() => {
        setApiState(false);
      }, 3000);
    }
  };

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  useEffect(() => {
    const fetchData = async (contractTypeID) => {
      return await services.getByContractTypeId(contractTypeID);
    };
    fetchData(contractTypeID).then((data) => {
      setData(data.data.data);
      setTimeout(() => {}, 3000);
    });
  }, []);

  return (
    <Page title="Dashboard: Sözleşme Türleri">
      <Container maxWidth="xxl">
        <Stack sx={{ mb: 5 }} direction="row" alignItems="center" justifyContent="space-between">
          <Button
            variant="outlined"
            to="/dashboard/contract-types"
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
                  {dataFinal.name} adlı kayıt silinecektir!
                </Typography>
                <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                  <Button sx={{ mr: 2 }} onClick={() => onDelete(contractTypeID)} variant="outlined" color="error">
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
        <Card sx={{ mt: 2 }}>
          <CardHeader title={dataFinal.name} />
          <Divider />
          <CardContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin="normal"
                  name="name"
                  value={dataFinal.name}
                  label="Ad"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  name="title"
                  margin="normal"
                  value={dataFinal.title}
                  label="Başlık"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin='normal'
                  name="subMainTitle"
                  value={dataFinal.subMainTitle}
                  label="Alt Ana Başlık"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin='normal'
                  name="subContTitle"
                  value={dataFinal.subContTitle}
                  label="Alt İçerik Başlık"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin='normal'
                  multiline
                  name="description"
                  value={dataFinal.description}
                  label="Açıklama"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin='normal'
                  multiline
                  name="mainDescription"
                  value={dataFinal.mainDescription}
                  label="Ana Açıklama"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin='normal'
                  multiline
                  name="content"
                  value={dataFinal.content}
                  label="İçerik"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin='normal'
                  multiline
                  name="mainContent"
                  value={dataFinal.mainContent}
                  label="Ana İçerik"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  margin='normal'
                  multiline
                  name="subContent"
                  value={dataFinal.subContent}
                  label="Alt İçerik"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin='normal'
                  name="altText"
                  value={dataFinal.altText}
                  label="Alt Yazı"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin='normal'
                  name="altMainText"
                  value={dataFinal.altMainText}
                  label="Alt Ana Yazı"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin='normal'
                  name="altContentText"
                  value={dataFinal.altContentText}
                  label="Alt İçerik Yazı"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  margin='normal'
                  name="contractTime"
                  value={dataFinal.contractTime}
                  label="Sözleşme Tarihi"
                  onChange={handleChange}
                  fullWidth
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
            <Button color="primary" variant="contained" type="submit" onClick={() => update(contractTypeID)}>
              Güncelle
            </Button>
          </Box>
        </Card>
      </Container>
    </Page>
  );
};

export default ContractTypeDetail;

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
import ContractTypeServices from '../../../services/ContractTypeService';

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

const ContractType = () => {
  const services = new ContractTypeServices();

  const [data, setData] = useState({
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

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const contractTypeData = {
        name: data.name,
        title: data.title,
        subMainTitle: data.subMainTitle,
        subContTitle: data.subContTitle,
        description: data.description,
        mainDescription: data.mainDescription,
        content: data.content,
        mainContent: data.mainContent,
        subContent: data.subContent,
        altText: data.altText,
        altMainText: data.altMainText,
        altContentText: data.altContentText,
        contractTime: data.contractTime,
    };

    await services.addContractType(contractTypeData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [contractType, setContractType] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getContractType().then((result) => setContractType(result.data));
  };
  useEffect(() => {
    getData();
  }, []);

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const columns = [
    {
      name: 'name',
      label: 'Ad',
      options: {
        filter: false,
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
              to={'/dashboard/contract-type-detail/contractTypeID=' + contractType.data[dataIndex].contentId}
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
    <Page title="S??zle??me T??rleri">
      <Container maxWidth="xxl">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button
            variant="outlined"
            to="/dashboard/settings"
            LinkComponent={RouterLink}
            startIcon={<Iconify icon="akar-icons:arrow-back-thick-fill" />}
          >
            Listeye Geri D??n
          </Button>
          <Button
            onClick={handleOpen}
            variant="contained"
            component={RouterLink}
            to=""
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Yeni Kay??t Ekle
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
              Yeni Kay??t Ekle
            </Typography>
            <FormProvider onSubmit={(e) => onSubmit(e)}>
              <Stack spacing={3}>
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="ImageUrl"
                  label="G??rsel"
                  value={data.ImageUrl}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="TitleTR"
                  label="Ad??"
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
        {apiState ? alertState('Ba??ar??l??!!!', 'Yeni Cihaz T??r?? Olu??turma ????lemi', 'Ba??ar??yla Tamamland??!!') : ''}
        <br />
        <MuiTable title={'S??zle??meler'} data={contractType.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default ContractType;

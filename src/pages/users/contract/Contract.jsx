import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

//API HATALI KONTROL EDİLECEK

//material
import {
  Stack,
  Button,
  Container,
  Typography,
  Box,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// component
import MuiTable from '../../../components/tables/Table';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import { FormProvider } from '../../../components/hook-form';

//mock
import { columns } from '../../../mock/user/contract/contractColumn';
import { options } from '../../../mock/MuiTableOptions';

//service
import UserContractService from '../../../services/UserContractService';
import ContractTypeService from '../../../services/ContractTypeService';

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

const Contract = () => {
  const services = new UserContractService();
  const contractService = new ContractTypeService();

  let { userID } = useParams();

  const renderMenuItems = (data) => {
    return data.map((item) => {
      return (
        <MenuItem key={item.contentId} value={item.contentId}>
          {item.name}
        </MenuItem>
      );
    });
  };
  const [selectModel, setSelectModel] = useState([
    {
      contentId: '',
      name: '',
    },
  ]);

  const [listData, setListData] = useState([]);

  const [data, setData] = useState({
    SalesID: '',
    UserID: userID,
    ContractID: '',
    ContractTypeID: '',
    ContractName: '',
  });
  
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSelect = (event) => {
    setListData(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const contractData = {
      SalesID: '',
      UserID: userID,
      ContractID: data.ContractID,
      ContractTypeID: data.ContractTypeID,
      ContractName: data.ContractName,
    };

    await services.addUserContract(contractData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        getData();
        handleClose();
      }
    });
  };

  const [contract, setContract] = useState({});
  const [handleResult, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getMenuItem = () => {
    contractService.getContractType().then((result) => {
      setListData(result.data);
      setSelectModel(result.data.data);
    });
    setListData(getMenuItem.data);
  };

  const getData = () => {
    services.getByUserId(userID).then((result) => setContract(result.data));
  };
  useEffect(() => {
     getData();
     console.log(contract.data)
    getMenuItem(listData);
  }, []);

  return (
    <Page title="Sözleşme">
      <Container maxWidth="xxl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5" gutterBottom>
            Sözleşme Kayıtları
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
                  name="UserID"
                  label="Kullanıcı ID"
                  value={data.UserID}
                  onChange={handleChange}
                  fullWidth
                  disabled
                  hiddens
                />
                <TextField
                  required
                  name="ContractID"
                  label="Sözleşme ID"
                  value={data.ContractID}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  required
                  name="ContractName"
                  label="Adı"
                  value={data.ContractName}
                  onChange={handleChange}
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel>Sözleşme Seçiniz</InputLabel>
                  <Select defaultValue={undefined} value={listData || ''} onChange={handleSelect}>
                    {renderMenuItems(selectModel)}
                  </Select>
                </FormControl>
                <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
                  Kaydet
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Modal>
        <MuiTable title={'Sözleşme'} data={contract.data} columns={columns} options={options} />
      </Container>
    </Page>
  );
};
export default Contract;

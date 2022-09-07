import React from 'react';
import { useEffect, useState } from 'react';

//material
import { Stack, TextField, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//components
import { FormProvider } from '../../../components/hook-form';
import SuccessAlert from '../../../components/alerts/Alerts';

//service
import InstallationService from '../../../services/InstallationService';
import ContractTypeService from '../../../services/ContractTypeService';

function UserContract({ setDisabled }) {
  const services = new InstallationService();
  const contractService = new ContractTypeService();

  const alertState = (title, description, descriptionStrong, severity, color) => {
    return (
      <SuccessAlert
        title={`${title}`}
        description={`${description}`}
        descriptionStrong={`${descriptionStrong}`}
        severity={`${severity}`}
        color={`${color}`}
      />
    );
  };

  const renderMenuItems = (data) => {
    return data.map((item) => {
      return (
        <MenuItem key={item.contentId} value={item.contentId}>{item.name}</MenuItem>
      );
    });
  };
  const [selectModel, setSelectModel] = useState([
    {
      contentId:'',
      name: '',
    },
  ]);

  const [listData, setListData] = useState([]);

  const [data, setData] = useState({
    UserID: '',
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
    const userContractData = {
      UserID: data.UserID,
      ContractID: data.ContractID,
      ContractTypeID: listData,
      ContractName: data.ContractName,
    };

    await services.addUserContract(userContractData).then((e) => {
      if (e.status === 201) {
        setResult(e.data);
        setApiState(true);
        setDisabled(false);
        setSaveDisabled(true);
        setTimeout(() => {
          setApiState(false);
        }, 999999);
      }
    });
  };

  const [saveDisabled, setSaveDisabled] = useState(false)
  const [handleResult, setResult] = useState({});
  const [apiState, setApiState] = useState(false);

  const getData = () => {
    contractService.getContractType().then((result) => {
      setListData(result.data);
      setSelectModel(result.data.data);
    });
    setListData(getData.data);
  };

  useEffect(() => {
    getData(listData);
  }, []);

  return (
    <FormProvider onSubmit={(e) => onSubmit(e)}>
      <Grid container spacing={3}>
        {apiState
          ? alertState(
              'Başarılı!!!',
              'Yeni Sözleşme Oluşturma İşlemi Başarıyla Tamamlandı!',
              'Lütfen Sonraki Adıma Geçiniz!',
              'success',
              'success'
            )
          : ''}
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="UserID"
            label="Kullanıcı ID"
            value={data.UserID}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ContractID"
            label="Sözleşme ID"
            value={data.ContractID}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="ContractName"
            label="Adı"
            value={data.ContractName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Sözleşme Seçiniz</InputLabel>
            <Select defaultValue={undefined} value={listData || ""} onChange={handleSelect}>
            {renderMenuItems(selectModel)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Stack mt={3}>
        <LoadingButton disabled={saveDisabled} onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
          Kaydet
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

export default UserContract;

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material
import { Backdrop, Box, Button, Modal, Fade, Stack, Typography } from '@mui/material';

// components
import StepperButton from '../../components/stepper/StepperButton';
import Iconify from '../../components/Iconify';
import Guide from '../../sections/@dashboard/setup/Guide';
import User from '../../sections/@dashboard/setup/User';
import ContractType from '../../sections/@dashboard/setup/ContractType';
import UserContract from '../../sections/@dashboard/setup/UserContract';
import Subscription from 'src/sections/@dashboard/setup/Subscription';
import SimCard from '../../sections/@dashboard/setup/SimCard';
import Modem from '../../sections/@dashboard/setup/Modem';
import Gateway from '../../sections/@dashboard/setup/Gateway';
import Fields from '../../sections/@dashboard/setup/Fields';
import WorkGroup from '../../sections/@dashboard/setup/WorkGroup';
import Sensor from '../../sections/@dashboard/setup/Sensor';
import Pump from '../../sections/@dashboard/setup/Pump';
import Valve from '../../sections/@dashboard/setup/Valve';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '80%',
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

export default function Setup() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [activeStep, setActiveStep] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false)
  const [disabled, setDisabled]= useState(true)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setDisabled(true)
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setDisabled(true)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
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
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              {
              activeStep === 0 ? <Typography variant="h5">Hızlı Kurulum Ekranı</Typography> :
              activeStep === 1 ? <Typography variant="h5">Müşteri Ekle</Typography> : 
              activeStep === 2 ? <Typography variant="h5">Sözleşme Ekle</Typography>  :
              activeStep === 3 ? <Typography variant="h5">Müşterilerin Sözleşmeleri</Typography> :
              activeStep === 4 ? <Typography variant="h5">Abonelik Ekle</Typography> : 
              activeStep === 5 ? <Typography variant="h5">Gateway Ekle</Typography> :
              activeStep === 6 ? <Typography variant="h5">Tarla Ekle</Typography> :
              activeStep === 7 ? <Typography variant="h5">Sim Kart Ekle</Typography> : 
              activeStep === 8 ? <Typography variant="h5">Modem Kayıtları Ekle</Typography> :
              activeStep === 9 ? <Typography variant="h5">Çalışma Grubu Ekle</Typography> :
              activeStep === 10 ? <Typography variant="h5">Sensör Kartı Ekle</Typography> :
              activeStep === 11 ? <Typography variant="h5">Vana Kartı Ekle</Typography> : 
              activeStep === 12 ? <Typography variant="h5">Pompa Kartı Ekle</Typography> :''
              }

              <Button
                onClick={() => handleClose()}
                to="/dashboard/app"
                LinkComponent={RouterLink}
                startIcon={<Iconify icon="fa:close" />}
              />
            </Stack>
            {
            activeStep === 0 ? <Guide /> :
            activeStep === 1 ? <User setDisabled={setDisabled}/> :
            activeStep === 2 ? <ContractType setDisabled={setDisabled} handleSkip={handleSkip}/> :
            activeStep === 3 ? <UserContract setDisabled={setDisabled}/>: 
            activeStep === 4 ? <Subscription setDisabled={setDisabled}/> : 
            activeStep === 5 ? <Gateway setDisabled={setDisabled}/> : 
            activeStep === 6 ? <Fields setDisabled={setDisabled}/> : 
            activeStep === 7 ? <SimCard setDisabled={setDisabled}/> :
            activeStep === 8 ? <Modem setDisabled={setDisabled}/> :
            activeStep === 9 ? <WorkGroup setDisabled={setDisabled}/> :
            activeStep === 10 ? <Sensor setDisabled={setDisabled}/> :
            activeStep === 11 ? <Valve setDisabled={setDisabled}/> :
            activeStep === 12 ? <Pump setDisabled={setDisabled}/> : '' 
            }
            <br />
            <StepperButton activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} stepsCount={13} showNextButton={showNextButton} disabled={disabled} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

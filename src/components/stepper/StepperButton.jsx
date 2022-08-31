import * as React from 'react';

import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const StepperButton = ({ activeStep, handleBack, handleNext, stepsCount, disabled }) => {

  return (
    <MobileStepper
      variant="progress"
      steps={stepsCount}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 'auto', flexGrow: 1,  textAlign: 'center', backgroundColor:'transparent' }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep===0?false:disabled}>
          İleri
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Geri
        </Button>
      }
    />
  );
};
export default StepperButton;

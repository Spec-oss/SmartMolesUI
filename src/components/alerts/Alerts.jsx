import * as React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function SuccessAlert(props) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
     
      <Alert severity={props.severity} color={props.color}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.description} — <strong>{props.descriptionStrong}</strong>
      </Alert>
    </Stack>
  );
}
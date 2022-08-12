import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export const columns = [
  {
    name: 'Name',
    label: 'Ad',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Lang',
    label: 'Lang',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Lat',
    label: 'Lat',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'ServerIP',
    label: 'Server IP',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'ServerPort',
    label: 'Server Port',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'GatewayIP',
    label: 'Gateway IP',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'GatewayPort',
    label: 'Gateway Port',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'TelitClientPort',
    label: 'Telit Client Port',
    options: {
      filter: true,
      sort: false,
    },
  },
];

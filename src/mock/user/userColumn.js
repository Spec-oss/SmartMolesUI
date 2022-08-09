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
    name: 'Surname',
    label: 'Soyad',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Mail',
    label: 'E-mail',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'Phone',
    label: 'Telefon',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Detaylar",
    options: {
      filter: false,
      sort: false,
      empty: true,
      customBodyRenderLite: () => {
        return (
          <Button variant="contained" size="small" to="/dashboard/user-detail" LinkComponent={RouterLink}>
            Detaylar
          </Button>
        );
      }
    }
  },
];

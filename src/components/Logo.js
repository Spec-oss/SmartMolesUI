import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import logoUrl from '../assets//images/logo/SmartMoles-Beyaz.png'
// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 125, height: 70, margin:'0px 40px',  ...sx }}>
      <img src={logoUrl} alt='Logo'/>
    </Box>
  );

  if (disabledLink) {s
    return <>{logo}</>;
  }

  return <RouterLink to="/dashboard/app">{logo}</RouterLink>;
}

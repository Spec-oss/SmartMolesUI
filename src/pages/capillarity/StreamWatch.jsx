import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import InfoIcon from "@mui/icons-material/Info";
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppKhasSensor from '../../sections/@dashboard/capillarity/AppKhasSensor'
import Khas from './Khas';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StreamWatch = ({ text }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <Grid item xs={12}>
        {/* <Grid container > */}
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab icon={<InfoIcon />} iconPosition="start" label='KHAS'  {...a11yProps(0)} />
            <Tab icon={<InfoIcon />} iconPosition="start" label="GRAFİK" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%' }}>
          <TabPanel value={value} index={0}>
            <Khas />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AppKhasSensor
            title="Website Visits"
            subheader="(+43%) than last year"
            chartLabels={[
              '01/01/2012',
              '02/01/2012',
              '03/01/2012',
              '04/01/2012',
              '05/01/2012',
              '06/01/2012',
              '07/01/2012',
            ]}
            chartData={[
              { name: 'Series 1', data: [80, 50, 30, 40, 100, 20,70] },
              { name: 'Series 2', data: [20, 30, 40, 80, 20, 80,90] },
              { name: 'Series 3', data: [44, 76, 78, 13, 43, 10,5] },
            ]}/>
          </TabPanel>
        </Box>
        {/* </Grid> */}
      </Grid>
  );
};

export default StreamWatch;

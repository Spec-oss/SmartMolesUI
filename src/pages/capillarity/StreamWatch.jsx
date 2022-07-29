import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import InfoIcon from "@mui/icons-material/Info";
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LineChart from "../../components/googleChart/LineChart";
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
            {/* <LineChart /> */}
          </TabPanel>
        </Box>
        {/* </Grid> */}
      </Grid>
  );
};

export default StreamWatch;

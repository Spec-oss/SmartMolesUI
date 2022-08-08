import { useState } from 'react';

import { Tabs, Tab, Grid, Box , tabsClasses} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';

import StreamWatch from './StreamWatch';
import InfoTab from './InfoTab';
import LiveTab from './LiveTab';
import OptionsTab from './OptionsTab';

import './capillarity.scss';

function CapillarityDetail() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
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
            {children}
          </Box>
        )}
      </div>
    );
  }
  return (
    
      <Grid container>
        <Grid item xs={12} md={6}>
          <StreamWatch />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
          >
            <Tab icon={<InfoIcon />} label=" Bilgi Paneli" iconPosition="start" />
            <Tab icon={<BrowseGalleryIcon />} iconPosition="start" label="Geçmişe Dönük İzleme" />
            <Tab icon={<ModeFanOffIcon />} iconPosition="start" label="Koşullar" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <InfoTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LiveTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <OptionsTab />
          </TabPanel>
        </Grid>
      </Grid>

  );
}
export default CapillarityDetail;

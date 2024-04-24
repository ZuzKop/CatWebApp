import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import {useState} from "react"

import CatFact from "./CatFact/CatFact";
import CatPicture from "./CatPicture/CatPicture";

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
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


const RandomCatContentTabs = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

    return(
        <Box>
            
        <Tabs
          value={value}
          onChange={handleChange}
          centered
        >
            <Tab label="Cat Facts"/>
            <Tab label="Cat Pictures"/>

        </Tabs>
             <TabPanel value={value} index={0}>
      <CatFact />
           </TabPanel>
           <TabPanel value={value} index={1}>
      <CatPicture />
           </TabPanel>
           
        </Box>
    )
}
export default RandomCatContentTabs;
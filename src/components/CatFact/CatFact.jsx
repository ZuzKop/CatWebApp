import {Box, Button, IconButton } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SavedCatFacts from "./SavedCatFactsList";

const CatPicture = ({catFact, updateCatFact, savedCatFacts, setSavedCatFacts}) => {
  return (
    <Box>
      <Box style={{display: 'flex', alignItems: 'center'}}>
        <BookmarkIcon 
          style={{width: '50px', flexShrink: 0, position: 'relative', top: '-80px' }} 
          fontSize="large"             
          onClick={() => {
            setSavedCatFacts(prevFacts => [...prevFacts, catFact]);
            }}
         />
        <Box style={{width: '90%'}}>
          <h1>{catFact}</h1>
          <Button
        variant="contained"
        onClick={() => {
          updateCatFact();
        }}
      >
        Generate a cat fact!
      </Button>
        </Box> 
      </Box >
<Box style={{paddingTop:'15px', marginLeft: '40px' }} >
      <SavedCatFacts savedCatFacts={savedCatFacts}/>

</Box>
    </Box>
  );
};
export default CatPicture;

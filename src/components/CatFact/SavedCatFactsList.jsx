import { Box } from "@mui/material";
import ExpandContent from "../ExpandContent/ExpandContent";
import CatFactModuleCSS from "./CatFact.module.css";
import Clear from "@mui/icons-material/Close";

const SavedCatFacts = ({ savedCatFacts, setSavedCatFacts, updateCatFacts }) => {
  const content = savedCatFacts.map((fact, index) => (
    <Box
      onClick={() => {
        updateCatFacts(savedCatFacts, setSavedCatFacts, fact);
      }}
      className={CatFactModuleCSS.factsFlexbox}
    >
      <Box className={CatFactModuleCSS.factHover} key={index}>
        {fact}
      </Box>

      <Box className={CatFactModuleCSS.clear}>
        <Clear fontSize="xs" />
      </Box>
    </Box>
  ));

  return (
    <Box>
      <ExpandContent content={content} title="Bookmarked Facts"></ExpandContent>
    </Box>
  );
};
export default SavedCatFacts;

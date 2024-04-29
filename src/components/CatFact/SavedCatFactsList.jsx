import { Box } from "@mui/material";
import ExpandContent from "../ExpandContent/ExpandContent";
import CatFactModuleCSS from "./CatFact.module.css";
import Clear from "@mui/icons-material/Close";

const SavedCatFacts = ({
  savedCatFacts,
  setSavedCatFacts,
  updateSavedCatFacts,
}) => {
  const content = savedCatFacts.map((fact, index) => (
    <Box
      onClick={() => {
        updateSavedCatFacts(savedCatFacts, setSavedCatFacts, fact);
      }}
      className={CatFactModuleCSS.factsFlexbox}
      key={index}
    >
      <Box className={CatFactModuleCSS.factHover}>{fact}</Box>

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

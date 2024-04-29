import { Box, Button, Divider } from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";
import SavedCatFacts from "./SavedCatFactsList";
import CatFactModuleCSS from "./CatFact.module.css";

const updateCatFacts = (savedCatFacts, setSavedCatFacts, catFact) => {
  if (!savedCatFacts.some((item) => item === catFact)) {
    setSavedCatFacts((prevFacts) => [...prevFacts, catFact]);
  } else {
    setSavedCatFacts((prevFacts) =>
      prevFacts.filter((fact) => fact !== catFact)
    );
  }
};

const BookmarkIcon = ({ savedCatFacts, catFact, setSavedCatFacts }) => {
  const Icon = savedCatFacts.some((item) => item === catFact)
    ? Bookmark
    : BookmarkBorder;

  return (
    <Box>
      <Icon
        className={CatFactModuleCSS.BookmarkIcon}
        fontSize="large"
        onClick={() => {
          updateCatFacts(savedCatFacts, setSavedCatFacts, catFact);
        }}
      />
    </Box>
  );
};

const CatPicture = ({
  catFact,
  updateCatFact,
  savedCatFacts,
  setSavedCatFacts,
}) => {
  return (
    <Box>
      <Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <BookmarkIcon
            savedCatFacts={savedCatFacts}
            catFact={catFact}
            setSavedCatFacts={setSavedCatFacts}
          ></BookmarkIcon>
          <h1>{catFact}</h1>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            updateCatFact();
          }}
        >
          Generate a cat fact!
        </Button>
      </Box>
      <Divider variant="middle" style={{ padding: "10px", opacity: 0.33 }} />
      <Box>
        <SavedCatFacts
          savedCatFacts={savedCatFacts}
          updateCatFacts={updateCatFacts}
          setSavedCatFacts={setSavedCatFacts}
        />
      </Box>
    </Box>
  );
};
export default CatPicture;

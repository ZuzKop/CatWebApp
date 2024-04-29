import { Box, Button, CircularProgress, Divider } from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";
import SavedCatFacts from "./SavedCatFactsList";
import CatFactModuleCSS from "./CatFact.module.css";
import { useEffect } from "react";

const updateSavedCatFacts = (savedCatFacts, setSavedCatFacts, catFact) => {
  if (!savedCatFacts.some((item) => item === catFact)) {
    setSavedCatFacts((prevFacts) => [...prevFacts, catFact]);
  } else {
    setSavedCatFacts((prevFacts) =>
      prevFacts.filter((fact) => fact !== catFact)
    );
  }
};

const BookmarkIcon = ({ savedCatFacts, catFact, setSavedCatFacts }) => {
  if (catFact === "") {
    return null;
  }

  const Icon = savedCatFacts.some((item) => item === catFact)
    ? Bookmark
    : BookmarkBorder;

  return (
    <Box>
      <Icon
        className={CatFactModuleCSS.BookmarkIcon}
        fontSize="large"
        onClick={() => {
          updateSavedCatFacts(savedCatFacts, setSavedCatFacts, catFact);
        }}
      />
    </Box>
  );
};

const FactDisplay = ({ fact }) => {
  if (fact === "") {
    return (
      <Box style={{ padding: "10px" }}>
        {" "}
        <CircularProgress />
      </Box>
    );
  } else {
    return <h1>{fact}</h1>;
  }
};

const CatFact = ({
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
          <FactDisplay fact={catFact} />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            updateCatFact(catFact);
          }}
        >
          Generate a cat fact!
        </Button>
      </Box>
      <Divider variant="middle" style={{ padding: "10px", opacity: 0.33 }} />
      <Box>
        <SavedCatFacts
          savedCatFacts={savedCatFacts}
          updateFavedCatFacts={updateSavedCatFacts}
          setSavedCatFacts={setSavedCatFacts}
        />
      </Box>
    </Box>
  );
};
export default CatFact;

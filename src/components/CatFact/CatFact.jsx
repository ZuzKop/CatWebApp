import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useCatFact } from "./useCatFact";

const CatPicture = () => {
  const [catFact, setCatFact] = React.useState("");

  const { fetchedCatFact, fetchCatFact } = useCatFact();

  useEffect(() => {
    updateCatFact();
  }, []);

  const updateCatFact = async () => {
    fetchCatFact();
  };

  useEffect(() => {
    setCatFact(fetchedCatFact);
  }, [fetchedCatFact]);

  return (
    <div>
      <h1>{catFact}</h1>
      <Button
        variant="contained"
        onClick={() => {
          updateCatFact();
        }}
      >
        Generate a cat fact!
      </Button>
    </div>
  );
};
export default CatPicture;

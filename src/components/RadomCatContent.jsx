import { useEffect, useState } from "react";
import { useCatPicture } from "./CatPicture/useCatPicture";
import { useCatFact } from "./CatFact/useCatFact";
import RandomCatContentTabs from "./RandomCatContentTabs";

const RandomCatContent = () => {
  const [catPicture, setCatPicture] = useState("");
  const [savedCatPictures, setSavedCatPictures] = useState([]);
  const [catFact, setCatFact] = useState("");
  const [savedCatFacts, setSavedCatFacts] = useState([]);
  const { fetchedCatPicture, fetchCatPicture } = useCatPicture("");
  const { fetchedCatFact, fetchCatFact } = useCatFact("");

  useEffect(() => {
    updateCatPicture();
    updateCatFact();
  }, []);

  const updateCatPicture = async () => {
    setCatPicture("");
    await fetchCatPicture();
  };

  useEffect(() => {
    if (fetchedCatFact && !fetchedCatPicture.includes(".gif")) {
      setCatPicture(fetchedCatPicture);
    } else {
      // Ponowny fetch jeśli wylosował się gif
      setCatPicture("");
      updateCatPicture();
    }
  }, [fetchedCatPicture]);

  useEffect(() => {
    setCatFact(fetchedCatFact);
  }, [fetchedCatFact]);

  const updateCatFact = async () => {
    setCatFact("");
    await fetchCatFact();
  };

  return (
    <div>
      <RandomCatContentTabs
        catPicture={catPicture}
        updateCatPicture={updateCatPicture}
        savedCatPictures={savedCatPictures}
        setSavedCatPictures={setSavedCatPictures}
        catFact={catFact}
        updateCatFact={updateCatFact}
        savedCatFacts={savedCatFacts}
        setSavedCatFacts={setSavedCatFacts}
      />
    </div>
  );
};

export default RandomCatContent;

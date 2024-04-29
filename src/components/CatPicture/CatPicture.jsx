import { Box, Button, CircularProgress, Divider } from "@mui/material";
import CatPictureCSS from "./CatPicture.module.css";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import CatPictureModuleCSS from "./CatPicture.module.css";
import SavedCatPictures from "./SavedCatPictures";
import { useState, useEffect } from "react";

const updateSavedCatPictures = (
  setSavedCatPictures,
  savedCatPictures,
  catPicture
) => {
  if (!savedCatPictures.some((pic) => pic === catPicture)) {
    setSavedCatPictures((prevPics) => [...prevPics, catPicture]);
  } else {
    setSavedCatPictures((prevPics) =>
      prevPics.filter((pic) => pic !== catPicture)
    );
  }
};

const FavoriteIcon = ({
  setSavedCatPictures,
  savedCatPictures,
  catPicture,
  loading,
}) => {
  if (catPicture === "" || loading) {
    return null;
  }

  const Icon = savedCatPictures.some((pic) => pic === catPicture)
    ? Favorite
    : FavoriteBorder;

  return (
    <Box style={{ padding: "5px", paddingLeft: "20px" }}>
      <Icon
        fontSize="large"
        onClick={() => {
          updateSavedCatPictures(
            setSavedCatPictures,
            savedCatPictures,
            catPicture
          );
        }}
      />
    </Box>
  );
};

const DisplayPicture = ({ catPicture, loading }) => {
  if (loading || catPicture === " ") {
    return <CircularProgress />;
  } else {
    return (
      <img className={CatPictureCSS.catImage} src={catPicture} alt="a cat" />
    );
  }
};

const CatPicture = ({
  updateCatPicture,
  catPicture,
  savedCatPictures,
  setSavedCatPictures,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = catPicture;
    img.onload = () => setLoading(false);
    img.onerror = () => setLoading(true);
  }, [catPicture]);

  return (
    <Box>
      <Box className={CatPictureModuleCSS.catPicFlexbox}>
        <DisplayPicture catPicture={catPicture} loading={loading} />
        <Box>
          <FavoriteIcon
            savedCatPictures={savedCatPictures}
            catPicture={catPicture}
            setSavedCatPictures={setSavedCatPictures}
            loading={loading}
          />
        </Box>
      </Box>
      <Box style={{ paddingTop: "30px" }}>
        <Button
          variant="contained"
          onClick={() => {
            updateCatPicture();
          }}
        >
          Generate a cat picture
        </Button>
      </Box>

      <Divider variant="middle" style={{ padding: "10px", opacity: 0.33 }} />
      <SavedCatPictures
        savedCatPictures={savedCatPictures}
        updateSavedCatPictures={updateSavedCatPictures}
        setSavedCatPictures={setSavedCatPictures}
      ></SavedCatPictures>
    </Box>
  );
};
export default CatPicture;

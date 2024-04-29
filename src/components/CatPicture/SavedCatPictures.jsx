import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Clear } from "@mui/icons-material";
import CatPictureModuleCSS from "./CatPicture.module.css";

const SavedCatPictures = ({
  savedCatPictures,
  updateSavedCatPictures,
  setSavedCatPictures,
}) => {
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <ImageList sx={{ width: "60vw" }} rowHeight={200} cols={4} gap={8}>
        {savedCatPictures.map((item) => (
          <ImageListItem className={CatPictureModuleCSS.imageList} key={item}>
            <img
              src={item}
              alt="a cat"
              onClick={() => {
                updateSavedCatPictures(
                  setSavedCatPictures,
                  savedCatPictures,
                  item
                );
              }}
            />
            <Clear
              className={CatPictureModuleCSS.removeImage}
              fontSize="large"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default SavedCatPictures;

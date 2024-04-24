import { useEffect, useState } from "react";
import { useCatPicture } from "./useCatPicture";
import { Button } from "@mui/material";
import CatPictureCSS from "./CatPicture.module.css"

const CatPicture = () => {

const [catPicture, setCatPicture] = useState();
const { fetchedCatPicture, fetchCatPicture } = useCatPicture();

  useEffect(() => {
    updateCatPicture();
  }, []);

  const updateCatPicture = async () => {
    await fetchCatPicture();
  }

  useEffect(() => {
    setCatPicture(fetchedCatPicture);
  },[fetchedCatPicture]);

  return (
    <div>
        <div>
      <img className={CatPictureCSS.catImage} src={catPicture} alt="a cat"></img>
        </div>
      
      <Button variant="contained" onClick={() => {updateCatPicture()}}>Generate a cat picture</Button>
    </div>
  );
};
export default CatPicture;

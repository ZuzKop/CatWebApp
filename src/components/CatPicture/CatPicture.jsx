import { Button } from "@mui/material";
import CatPictureCSS from "./CatPicture.module.css"

const CatPicture = ({updateCatPicture, catPicture }) => {

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

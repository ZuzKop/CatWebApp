import Button from "@mui/material/Button";

const CatPicture = ({catFact, updateCatFact}) => {
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

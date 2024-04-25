import { useEffect, useState } from 'react'
import {useCatPicture} from "./CatPicture/useCatPicture"
import { useCatFact } from "./CatFact/useCatFact"
import RandomCatContentTabs from "./RandomCatContentTabs";

const RandomCatContent = () => {
    
    const [catPicture, setCatPicture] = useState("");
    const [catFact, setCatFact] = useState("");
    const { fetchedCatPicture, fetchCatPicture } = useCatPicture();
    const { fetchedCatFact, fetchCatFact } = useCatFact();

    useEffect(() => {
      updateCatPicture();
      updateCatFact();
    }, []);
  
    const updateCatPicture = async () => {
      await fetchCatPicture();
    }
  
    useEffect(() => {
      setCatPicture(fetchedCatPicture);
    },[fetchedCatPicture]);

    useEffect(() => {
      setCatFact(fetchedCatFact);
    },[fetchedCatFact]);

    const updateCatFact = async () => {
      await fetchCatFact();
    }

    return (
        <div>
            <RandomCatContentTabs 
              catPicture={catPicture} 
              updateCatPicture={updateCatPicture}
              catFact={catFact}
              updateCatFact={updateCatFact}
            />
        </div>
)

}

export default RandomCatContent;
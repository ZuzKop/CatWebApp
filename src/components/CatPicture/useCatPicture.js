import { useState } from "react";
import axios from "axios";

export function useCatPicture() {
  const [fetchedCatPicture, setFetchedCatPicture] = useState();

  const api = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search",
  });

  const fetchCatPicture = async () => {
    try {
      const response = await api.get("/");
      setFetchedCatPicture(response.data[0].url);
    } catch (error) {
      console.error(error);
      setFetchedCatPicture("https://placehold.co/600x400/EEE/31343C");
    }
  };

  console.log(fetchedCatPicture);

  return { fetchedCatPicture, fetchCatPicture };
}

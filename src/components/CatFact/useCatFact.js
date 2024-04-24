import axios from "axios";
import React from "react";

export function useCatFact() {
  const [fetchedCatFact, setFetchedCatFact] = React.useState("");

  const api = axios.create({
    baseURL: "https://catfact.ninja/fact",
  });

  const fetchCatFact = async () => {
    try {
      const response = await api.get("/");
      setFetchedCatFact(response.data.fact);
    } catch (error) {
      setFetchedCatFact("Error while fetching your cat fact. Sorry!");
      console.error(error);
    }
  };

  return { fetchedCatFact, fetchCatFact };
}

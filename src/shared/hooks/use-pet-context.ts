import { useContext } from "react";
import { PetContext } from "../context/pet-context-provider";

const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }
  return context;
};

export default usePetContext;

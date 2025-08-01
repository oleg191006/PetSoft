"use client";

import { createContext, useState } from "react";
import { Pet } from "../types";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type PetContext = {
  pets: Pet[];
  selectedPetId: string | null;
};

export const PetContext = createContext<PetContext | null>(null);

const PetContextProvider = ({ data, children }: PetContextProviderProps) => {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState(null);
  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;

"use client";

import { createContext, useState } from "react";
import { Pet } from "../types";
import { addPet } from "@/actions/actions";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type PetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
  selectedPet: Pet | undefined;
  numberOfPets: number;
  handleDeletePet: (id: string) => void;
  handleAddPet: (newPet: Omit<Pet, "id">) => void;
  handleEditPet: (id: string, updatedPet: Omit<Pet, "id">) => void;
};

export const PetContext = createContext<PetContext | null>(null);

const PetContextProvider = ({ data, children }: PetContextProviderProps) => {
  const [pets, setPets] = useState<Omit<Pet[], "id"> | Pet[]>(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  const handleAddPet = async (newPet: Omit<Pet, "id">) => {
    //await addPet(newPet);
  };

  const handleEditPet = (id: string, updatedPet: Omit<Pet, "id">) => {
    setPets((prevPets) => {
      return prevPets.map((pet) => {
        if (pet.id === id) {
          return { ...pet, ...updatedPet };
        }
        return pet;
      });
    });
  };

  const handleDeletePet = (id: string) => {
    const filrederPets = pets.filter((pet) => pet.id !== id);
    setPets(filrederPets);
  };
  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        handleChangeSelectedPetId,
        selectedPet,
        numberOfPets,
        handleDeletePet,
        handleAddPet,
        handleEditPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;

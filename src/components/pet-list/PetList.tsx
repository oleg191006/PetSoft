"use client";

import { cn } from "@/lib/utils";
import usePetContext from "@/shared/hooks/use-pet-context";
import useSearchContext from "@/shared/hooks/use-search-context";
import { Pet } from "@/shared/types";
import Image from "next/image";

const PetList = () => {
  const { pets, handleChangeSelectedPetId, selectedPetId } = usePetContext();
  const { searchText } = useSearchContext();
  const filteredPets = pets.filter((pet: Pet) => {
    return pet.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {filteredPets.map((pet) => {
        return (
          <li key={pet.id}>
            <button
              onClick={() => handleChangeSelectedPetId(pet.id)}
              className={cn(
                "flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition",
                {
                  "bg-[#EFF1F2]": selectedPetId === pet.id,
                }
              )}
            >
              <Image
                src={pet.imageUrl}
                alt={pet.name}
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full object-cover"
              />
              <p className="font-semibold">{pet.name}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PetList;

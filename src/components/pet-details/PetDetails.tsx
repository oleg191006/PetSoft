"use client";
import usePetContext from "@/shared/hooks/use-pet-context";
import { Pet } from "@/shared/types";
import Image from "next/image";
import PetButton from "../pet-button/PetButton";

const PetDetails = () => {
  const { selectedPet } = usePetContext();
  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <div className="flex items-center  h-full justify-center">
          <EmptyView />
        </div>
      ) : (
        <>
          <TopBar selectedPet={selectedPet} />
          <OtherInfo selectedPet={selectedPet} />
          <Notes selectedPet={selectedPet} />
        </>
      )}
    </section>
  );
};

export default PetDetails;

function EmptyView() {
  return <p className="text-2xl font-medium">No pet selected</p>;
}

function TopBar({ selectedPet }: { selectedPet: Pet | undefined }) {
  return (
    <div className="flex items-center justify-between bg-white px-8 py-5 border-b border-black/[0.08]">
      <Image
        src={selectedPet?.imageUrl || ""}
        alt="selected pet image"
        width={75}
        height={75}
        className="w-[75px] h-[75px] rounded-full object-cover"
      />
      <h2 className="text-3xl font-semibold leading-7 ml-5">
        {selectedPet?.name}
      </h2>

      <div className="ml-auto flex gap-2">
        <PetButton actionType="edit">Edit</PetButton>
        <PetButton actionType="checkout">Checkout</PetButton>
      </div>
    </div>
  );
}

function OtherInfo({ selectedPet }: { selectedPet: Pet | undefined }) {
  return (
    <div className="bg-transparent flex justify-around py-10 px-5 ">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-900 ">{selectedPet?.ownerName}</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-900 ">{selectedPet?.age}</p>
      </div>
    </div>
  );
}

function Notes({ selectedPet }: { selectedPet: Pet | undefined }) {
  return (
    <section className="bg-white flex-1 px-7 py-5 rounded-md mb-9 mx-8 border">
      {selectedPet?.notes}
    </section>
  );
}

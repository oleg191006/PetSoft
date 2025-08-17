"use server";

import { Pet } from "@/shared/types";
import prisma from "../lib/db";

export async function addPet(pet: Omit<Pet, "id">) {
  await prisma.pet.create({
    data: pet,
  });
}

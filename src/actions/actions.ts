"use server";

import { Pet } from "@/shared/types";
import prisma from "../lib/db";
import { revalidatePath } from "next/cache";

export async function addPet(formData: FormData) {
  await prisma.pet.create({
    data: {
      name: formData.get("name") as string,
      ownerName: formData.get("ownerName") as string,
      imageUrl: formData.get("imageUrl") as string,
      age: parseInt(formData.get("age") as string, 10),
      notes: formData.get("notes") as string,
    } as Omit<Pet, "id">,
  });
  revalidatePath("/app", "layout");
}

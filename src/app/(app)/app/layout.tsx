import AppFooter from "@/components/app-footer/AppFooter";
import AppHeader from "@/components/app-header/AppHeader";
import BackgroundPattern from "@/components/background-pattern/BackgroundPattern";
import PetContextProvider from "@/shared/context/pet-context-provider";
import { Pet } from "@/shared/types";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );
  if (!response.ok) {
    throw new Error("Could not fetch pets");
  }
  const data: Pet[] = await response.json();

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
};

export default Layout;

import AppFooter from "@/components/app-footer/AppFooter";
import AppHeader from "@/components/app-header/AppHeader";
import BackgroundPattern from "@/components/background-pattern/BackgroundPattern";
import PetContextProvider from "@/shared/context/pet-context-provider";
import SearchContextProvider from "@/shared/context/search-context-provider";
import prisma from "@/lib/db";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const data = await prisma.pet.findMany({});

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        <SearchContextProvider>
          <PetContextProvider data={data}>{children}</PetContextProvider>
        </SearchContextProvider>
        <AppFooter />
      </div>
    </>
  );
};

export default Layout;

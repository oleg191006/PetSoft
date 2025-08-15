import Branding from "@/components/branding/Branding";
import ContentBlock from "@/components/content-block/ContentBlock";
import H1 from "@/components/h1/H1";
import PetButton from "@/components/pet-button/PetButton";
import PetDetails from "@/components/pet-details/PetDetails";
import PetList from "@/components/pet-list/PetList";
import SearchForm from "@/components/search-form/SearchForm";
import Stats from "@/components/stats/Stats";

const DashboardPage = async () => {
  return (
    <main>
      <div className="flex justify-between items-center text-white py-8">
        <Branding />
        <Stats />
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <SearchForm />
        </div>
        <div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1 relative">
          <ContentBlock>
            <PetList />
            <div className="absolute right-6 bottom-4">
              <PetButton actionType="add" />
            </div>
          </ContentBlock>
        </div>
        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;

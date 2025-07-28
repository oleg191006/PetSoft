import Branding from "@/components/branding/Branding";
import H1 from "@/components/h1/H1";
import Stats from "@/components/stats/Stats";

const DashboardPage = () => {
  return (
    <main>
      <div className="flex justify-between items-center text-white py-8">
        <Branding />
        <Stats />
      </div>
    </main>
  );
};

export default DashboardPage;

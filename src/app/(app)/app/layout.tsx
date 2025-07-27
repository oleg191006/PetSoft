import AppFooter from "@/components/app-footer/AppFooter";
import AppHeader from "@/components/app-header/AppHeader";
import BackgroundPattern from "@/components/background-pattern/BackgroundPattern";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundPattern />
      <div className="max-w-[1050px] mx-auto px-4">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
};

export default Layout;

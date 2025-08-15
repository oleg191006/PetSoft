import ContentBlock from "@/components/content-block/ContentBlock";
import H1 from "@/components/h1/H1";

const AccountPage = () => {
  return (
    <main>
      <H1 className="py-8 text-white">Your Account</H1>
      <ContentBlock className="min-h-[500px] flex justify-center items-center">
        <p>Loged in as ...</p>
      </ContentBlock>
    </main>
  );
};

export default AccountPage;

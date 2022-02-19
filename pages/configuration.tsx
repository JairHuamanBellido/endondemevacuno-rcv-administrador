import type { NextPage } from "next";
import { Sidebar } from "../src/shared";
import Header from "../src/module/Configuration/Application/components/Header";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";
import InformationSection from "../src/module/Configuration/Application/components/InformationSection";

const Configuration: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/*  It display when is low than 768px */}
      <MenuMobile />
      <main className="pt-20 px-8">
        <Header />
        <div className="flex">
          <InformationSection />
        </div>
      </main>
    </div>
  );
};

export default Configuration;

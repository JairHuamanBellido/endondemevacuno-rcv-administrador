import { NextPage } from "next";
import Header from "../src/module/Configuration/Application/components/Header";
import InventoryContainer from "../src/module/Inventory/Application/components/InventoryContainer";
import { Sidebar } from "../src/shared";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";

const Inventory: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MenuMobile />
      <main className="pt-20 relative px-8 w-full md:w-[calc(100vw-240px)]">
        <Header />
        <div className="flex relative w-full">
          <InventoryContainer />
        </div>
      </main>
    </div>
  );
};

export default Inventory;

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../src/module/Configuration/Application/components/Header";
import InventoryContainer from "../src/module/Inventory/Application/components/InventoryContainer";
import { Sidebar } from "../src/shared";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";

const Inventory: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      sessionStorage.getItem("token") === null &&
      localStorage.getItem("token") === null
    ) {
      router.replace("/login");
    }
  }, [router]);
  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <MenuMobile />
      <main className="pt-6 md:pt-20 relative px-8 w-full md:w-[calc(100vw-240px)]">
        <Header
          title="Inventario"
          description="Gestión las vacunas disponibles en tu centro de vacunación"
        />
        <div className="flex relative w-full">
          <InventoryContainer />
        </div>
      </main>
    </div>
  );
};

export default Inventory;

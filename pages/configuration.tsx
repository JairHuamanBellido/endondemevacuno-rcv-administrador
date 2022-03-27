import type { NextPage } from "next";
import { Sidebar } from "../src/shared";
import Header from "../src/module/Configuration/Application/components/Header";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";
import InformationSection from "../src/module/Configuration/Application/components/InformationSection";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Configuration: NextPage = () => {
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
      {/*  It display when is low than 768px */}
      <MenuMobile />
      <main className="pt-6 md:pt-20 px-8 w-full md:w-[calc(100vw-240px)]">
        <Header
          title="Configuración"
          description="Gestiona la información de tu centro de vacunación"
        />
        <div className="flex w-full">
          <InformationSection />
        </div>
      </main>
    </div>
  );
};

export default Configuration;

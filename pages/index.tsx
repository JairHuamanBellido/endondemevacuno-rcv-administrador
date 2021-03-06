import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../src/module/Configuration/Application/components/Header";
import { Sidebar } from "../src/shared";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";

const Home: NextPage = () => {
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
      <main className="md:pt-20 pt-6 px-8 w-full md:w-[calc(100vw-240px)]">
        <Header
          title="Dashboard"
          description="Visualiza las estadísticas de afluencia de tu centro de vacunación"
        />
        <h1>Hola soy el dashboard</h1>
      </main>
    </div>
  );
};

export default Home;

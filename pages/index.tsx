import type { NextPage } from "next";
import Header from "../src/module/Configuration/Application/components/Header";
import { Sidebar } from "../src/shared";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";

const Home: NextPage = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      {/*  It display when is low than 768px */}
      <MenuMobile />
      <main className="md:pt-20 pt-6 px-8 w-full md:w-[calc(100vw-240px)]">
        <Header title="Dashboard" description="Visualiza las estadísticas de afluencia de tu centro de vacunación" />
        <h1>Hola soy el dashboard</h1>
      </main>
    </div>
  );
};

export default Home;

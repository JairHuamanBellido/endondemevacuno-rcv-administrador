import type { NextPage } from "next";
import { Sidebar } from "../src/shared";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/*  It display when is low than 768px */}
      <MenuMobile />
      <main className="pt-20 px-8 w-full md:w-[calc(100vw-240px)]">
        <h1>Hola soy el dashboard</h1>
      </main>
    </div>
  );
};

export default Home;

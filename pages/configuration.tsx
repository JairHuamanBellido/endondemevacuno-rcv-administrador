import type { NextPage } from "next";
import { Sidebar } from "../src/shared";
import MenuMobile from "../src/shared/MenuMobile/MenuMobile";

const Configuration: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/*  It display when is low than 768px */}
      <MenuMobile />
      <main className="pt-20 px-8">
        <h1>Hola soy el configuration</h1>
      </main>
    </div>
  );
};

export default Configuration;

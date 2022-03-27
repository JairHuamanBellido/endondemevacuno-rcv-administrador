import { useState } from "react";
import AllVacinesContainer from "./AllVacinesContiner";
import ListInventory from "./ListInventory";
import Tabs from "./Tabs";

const labels = ["Mis vacunas", "Todas las vacunas"];
export default function InventoryContainer() {
  const [currentSection, setCurrentSection] = useState<string>("Mis vacunas");
  const onSelectTab = (label: string): void => {
    setCurrentSection(label);
  };
  return (
    <section className="flex w-full  flex-col mt-8">
      <Tabs
        currentSection={currentSection}
        labels={labels}
        onSelectTab={onSelectTab}
      />
      <div className="mt-4">
        {currentSection === "Mis vacunas" && <ListInventory />}
        {currentSection === "Todas las vacunas" && <AllVacinesContainer />}
      </div>
    </section>
  );
}

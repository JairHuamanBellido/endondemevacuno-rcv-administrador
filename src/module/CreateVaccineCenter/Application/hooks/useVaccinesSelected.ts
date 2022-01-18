import { useState } from "react";
import { VaccineSelected } from "../../Domain/model/VaccinesSelected";

export default function useVaccineSelected() {
  const [vaccinesSelected, setVaccineSelected] = useState<VaccineSelected[]>(
    []
  );
  const onSelectVaccine = (vaccine: VaccineSelected) => {
    const isVaccineExist = vaccinesSelected.some(
      (e) => e.vaccineId === vaccine.vaccineId
    );
    if (isVaccineExist) {
      setVaccineSelected([
        ...vaccinesSelected.filter((e) => e.vaccineId !== vaccine.vaccineId),
      ]);
    } else {
      setVaccineSelected([...vaccinesSelected, { ...vaccine, quantity: 0 }]);
    }
  };

  return { vaccinesSelected, onSelectVaccine };
}

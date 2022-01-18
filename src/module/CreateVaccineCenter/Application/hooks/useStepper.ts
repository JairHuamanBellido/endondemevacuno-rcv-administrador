import { useState } from "react";
import { IStepper } from "../../Domain/model/Stepper";

export default function useStepper() {
  const [stepperOptions, setStepperOptions] = useState<IStepper[]>([
    { isCompleted: false, label: "Información", current: true },
    { isCompleted: false, label: "Ubicación", current: false },
    { isCompleted: false, label: "Vacunas", current: false },
  ]);

  const isCurrentContainer = (label: string) => {
    return stepperOptions.find((e) => e.current === true)?.label === label;
  };

  const onSelectNext = (label: string, isCompleted: boolean = true): void => {
    setStepperOptions((prev) => {
      return prev.map((e) => {
        if (e.current === true) {
          return { ...e, isCompleted: isCompleted, current: false };
        }
        if (e.label === label) {
          return { ...e, current: true };
        }

        return { ...e, current: false };
      });
    });
  };

  return { stepperOptions, isCurrentContainer, onSelectNext };
}

import CheckIcon from "../Icon/CheckIcon";
import { IStepper } from "../../module/CreateVaccineCenter/Domain/model/Stepper";

interface Props {
  stepperOptions: IStepper[];
}
export default function Stepper({ stepperOptions }: Props) {
  const circleDynamicClassName = (option: IStepper): string => {
    if (option.current) return "border-green-400";
    return option.isCompleted ? "bg-green-400 border-none" : "border-gray-300 bg-white";
  };

  const labelDynamicClassName = (option: IStepper): string => {
    if (option.current) return "text-black";
    return option.isCompleted ? "text-gray-600" : "text-gray-300";
  };
  return (
    <div className="w-full flex items-center justify-between my-8">
      {stepperOptions.map((e) => (
        <div className="flex flex-col items-center" key={e.label}>
          <div
            className={`w-6 h-6 border-2 mb-2 rounded-full circle flex items-center justify-center
            ${circleDynamicClassName(e)}`}
          >
              {(e.isCompleted && !e.current) &&<CheckIcon color="#fff" />}
          </div>
          <p className={`text-sm ${labelDynamicClassName(e)}`}>{e.label}</p>
        </div>
      ))}
    </div>
  );
}

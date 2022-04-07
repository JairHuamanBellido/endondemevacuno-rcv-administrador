import { HtmlHTMLAttributes, useEffect, useState } from "react";
import {
  UseFormGetValues,
  UseFormRegisterReturn,
  UseFormWatch,
} from "react-hook-form";
import { CreateVaccineCenter } from "../../Domain/model/CreateVaccineCenter";
import Field from "../../../../shared/Field/Field";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  nameInput: UseFormRegisterReturn;
  hourStart: UseFormRegisterReturn;
  hourEnd: UseFormRegisterReturn;
  watch: UseFormWatch<CreateVaccineCenter>;
  onClickNext(label: string, isCompleted?: boolean): void;
}

export default function InformaticonSection({
  nameInput,
  hourEnd,
  hourStart,
  onClickNext,
  watch,
  ...props
}: Props) {
  const [isDisabled, setDisabled] = useState<boolean>();
  const {
    hourStart: hourStartWatch,
    name: nameWatch,
    hourEnd: hourEndWatch,
  } = watch();
  // useEffect(() => {
  //   watch((value) => {
  //     setDisabled((value.name && value.hourEnd && value.hourStart) === "");
  //   });
  // }, [watch]);
  return (
    <div {...props}>
      <Field
        placeholder="Ingrese el nombre del centro de vacunación"
        input={nameInput}
        label="Nombre"
      />
      <div className="flex sm:flex-row sm:items-center mt-6 mb-12  flex-col">
        <div className="sm:mr-4">
          <Field
            placeholder="09:00"
            input={hourStart}
            label="Horario de apertura"
          />
        </div>
        <div className="mt-6 sm:mt-0">
          <Field placeholder="18:00" input={hourEnd} label="Hora de cierre" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => {
            onClickNext("Ubicación");
          }}
          disabled={
            hourStartWatch === "" ||
            nameWatch === "" ||
            hourEndWatch === "" ||
            nameWatch === undefined
          }
          type="button"
          className="h-11 px-6 rounded bg-primary text-white"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

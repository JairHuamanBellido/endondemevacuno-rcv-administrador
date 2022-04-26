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
  capacity: UseFormRegisterReturn;
  watch: UseFormWatch<CreateVaccineCenter>;
  onClickNext(label: string, isCompleted?: boolean): void;
}

export default function InformaticonSection({
  nameInput,
  hourEnd,
  hourStart,
  onClickNext,
  capacity,
  watch,
  ...props
}: Props) {
  const [isDisabled, setDisabled] = useState<boolean>();
  const {
    hourStart: hourStartWatch,
    name: nameWatch,
    hourEnd: hourEndWatch,
    capacity: capacityWatch,
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
            placeholder="09:00am"
            input={hourStart}
            label="Horario de apertura"
          />
        </div>
        <div className="mt-6 sm:mt-0 sm:mr-4">
          <Field placeholder="06:00pm" input={hourEnd} label="Hora de cierre" />
        </div>
        <div className="mt-6 sm:mt-0">
          <Field placeholder="Aforo" input={capacity} label="Aforo" />
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
            capacityWatch === "" ||
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

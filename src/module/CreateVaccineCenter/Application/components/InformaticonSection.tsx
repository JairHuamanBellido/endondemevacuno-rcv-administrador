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
  onClickNext(label: string,isCompleted?:boolean): void;
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
  useEffect(() => {
    watch((value) => {
      setDisabled((value.name && value.hourEnd && value.hourStart) === "");
    });
  }, []);
  return (
    <div {...props}>
      <Field
        placeholder="Ingrese el nombre del centro de vacunación"
        input={nameInput}
        label="Nombre"
      />
      <div className="flex items-center mt-6 mb-12">
        <div className="mr-4">
          <Field
            placeholder="09:00"
            input={hourStart}
            label="Horario de apertura"
          />
        </div>
        <div>
          <Field placeholder="18:00" input={hourEnd} label="Hora de cierre" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => {
            onClickNext("Ubicación");
          }}
          disabled={isDisabled}
          type="button"
          className="h-11 px-6 rounded bg-primary text-white"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

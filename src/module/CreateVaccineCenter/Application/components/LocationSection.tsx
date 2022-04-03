import { HtmlHTMLAttributes, useEffect, useState } from "react";
import { UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Ubigeo } from "../../../Ubigeo/Domain/model/Ubigeo";
import { CreateVaccineCenter } from "../../Domain/model/CreateVaccineCenter";
import Field from "../../../../shared/Field/Field";
import GoogleMap from "../../../../shared/Map/Map";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  direction: UseFormRegisterReturn;
  diris: UseFormRegisterReturn;
  ubigeoId: UseFormRegisterReturn;
  localization: UseFormRegisterReturn;
  onSelectBack(label: string, isCompleted?: boolean): void;
  watch: UseFormWatch<CreateVaccineCenter>;
  setValue: UseFormSetValue<CreateVaccineCenter>;
  ubigeos: Ubigeo[];
  onSelectNext(label: string): void;
}

export default function LocationSection({
  direction,
  watch,
  diris,
  ubigeoId,
  ubigeos,
  localization,
  setValue,
  onSelectBack,
  onSelectNext,
  ...props
}: Props) {
  const [isDisabled, setDisabled] = useState<boolean>();

  const setLocalitation = (value: string) => {
    setValue('localization', value);
  }

  useEffect(() => {
    watch((value) => {
      setDisabled((value.direction && value.diris) === "");
    });
  }, [watch]);
  return (
    <div {...props} className="flex w-full h-full">
      <div className="w-2/4 h-full">
        <Field
          placeholder="Ingrese su direción"
          input={direction}
          label="Dirección"
          className="mb-4 pr-10"
        />
        <div className="flex gap-5  flex-col pr-10">
          <Field
            placeholder="Código DIRIS de su centro"
            input={diris}
            label="DIRIS"
            className=""
          />
          <div className={`${props.className} flex flex-col`}>
            <label htmlFor="">Distrito</label>
            <select
              className="h-12 px-4 border rounded border-gray-300 active:outline-none focus:border-primary"
              {...ubigeoId}
            >
              {ubigeos.map((ubigeo) => (
                <option key={ubigeo.id} value={ubigeo.id}>
                  {ubigeo.district}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center mt-12 justify-center">
          <button
            onClick={() => {
              onSelectBack("Información", false);
            }}
            type="button"
            className="h-11 px-6 mx-8 bg-gray-100 text-black rounded cursor-pointer"
          >
            Atrás
          </button>
          <button
            disabled={isDisabled}
            onClick={() => {
              onSelectNext("Vacunas");
            }}
            type="button"
            className="h-11 px-6 mx-8 bg-primary text-white cursor-pointer rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="h-full w-2/4">
        <GoogleMap isEditable={true} onChangeLocalization={setLocalitation} />
      </div>

    </div>
  );
}

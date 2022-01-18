import { HtmlHTMLAttributes } from "react";
import { Spinner } from "../../../../shared";
import { VaccineSelected } from "../../Domain/model/VaccinesSelected";
import useGetAllVacines from "../hooks/useGetAllVacines";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  onSelectVaccine(vaccine: VaccineSelected): void;
  vaccinesSelected: VaccineSelected[];
  onSelectBack(label: string, isCompleted: boolean): void;
  isLoading: boolean;
}

export default function VaccinesSection({
  onSelectVaccine,
  vaccinesSelected,
  onSelectBack,
  isLoading,
  ...props
}: Props) {
  const { data } = useGetAllVacines();

  const isSelected = (vaccineId: string) => {
    return vaccinesSelected.some((e) => e.vaccineId === vaccineId)
      ? "bg-primary text-white"
      : "bg-transparent hover:bg-gray-200 hover:text-black";
  };

  return (
    <div {...props}>
      <p className="mb-4 text-gray-600">
        Seleccione las vacunas que estén disponible en tu centro
      </p>
      <div className="flex  flex-col flex-wrap">
        {data !== undefined &&
          Object.keys(data).map((e) => (
            <div key={e}>
              <h3 className="font-semibold text-xl pb-1 border-b border-gray-300 mb-4">
                {e}
              </h3>
              <div className="flex flex-wrap gap-4">
                {data[e].map((vaccine) => (
                  <div
                    onClick={() => {
                      onSelectVaccine({ quantity: 50, vaccineId: vaccine.id });
                    }}
                    className={`cursor-pointer w-fit h-9 px-4 rounded  mb-4 flex items-center transition-all  ${isSelected(
                      vaccine.id
                    )}`}
                    key={vaccine.id}
                  >
                    <p>{vaccine.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center mt-12 justify-end">
        {!isLoading && (
          <>
            <button
              onClick={() => {
                onSelectBack("Ubicación", false);
              }}
              type="button"
              className="h-11 px-6  bg-gray-100 text-black rounded cursor-pointer"
            >
              Atrás
            </button>
            <button
              type="submit"
              className="h-11 px-6 ml-4 bg-primary text-white cursor-pointer rounded"
            >
              Finalizar
            </button>
          </>
        )}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

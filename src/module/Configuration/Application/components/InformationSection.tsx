import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../../../../shared";
import tailwindCssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";
import { UpdateVaccineCenter } from "../../Domain/model/UpdateVaccineCenter.model";
import useConfiguration from "../hooks/useConfiguration";
import useGetVaccineCenter from "../hooks/useGetVaccineCenter";
import useUpdateVaccineCenter from "../hooks/useUpdateVaccineCenter";
import DetailInformation from "./DetailInformation";

export default function InformationSection() {
  const { data, isLoading, refetch } = useGetVaccineCenter();
  const { isEdit, onClickCancel, onClickEdit, setIsEdit } = useConfiguration();
  const { register, getValues } = useForm<UpdateVaccineCenter>();
  const {
    mutate,
    isLoading: loadingSave,
    isSuccess,
  } = useUpdateVaccineCenter();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);
  const onClickSave = () => {
    if (data !== undefined) {
      mutate({
        endHour: getValues("endHour"),
        id: data.id,
        startHour: getValues("startHour"),
      });
      setIsEdit(false);
    }
  };

  const onClickAvailability = () => {
    if (data !== undefined) {
      mutate({
        id: data.id,
        isAvailable: !data.isAvailable,
      });
    }
  };
  if (data !== undefined && !isLoading)
    return (
      <section>
        <div className={tailwindCssBuilder("flex items-center", "my-8")}>
          <h3
            className={tailwindCssBuilder(
              "text-xl font-medium text-text-default mr-7"
            )}
          >
            Información
          </h3>
          {!isEdit && (
            <button
              onClick={onClickEdit}
              className={tailwindCssBuilder(
                "p-[10px] bg-[#EBEBEB] rounded text-text-secondary"
              )}
            >
              Editar
            </button>
          )}
        </div>
        <div>
          <DetailInformation label="Nombre" value={data.name} />
          <DetailInformation label="Dirección" value={data.direction} />
          <DetailInformation label="Distrito" value={data.ubigeo.district} />
          <DetailInformation
            multiple
            editable={isEdit}
            inputsProps={[
              register("startHour", { value: data.businessHour.split(" ")[0] }),
              register("endHour", { value: data.businessHour.split(" ")[2] }),
            ]}
            label="Horario de atención"
            value={data.businessHour}
          />
          <DetailInformation label="DIRIS" value={data.diris} />
        </div>
        {isEdit && (
          <div className="flex items-center">
            {!loadingSave && (
              <>
                <button
                  onClick={onClickSave}
                  className="bg-primary mr-4 rounded text-white p-[10px]"
                >
                  Guardar cambios
                </button>
                <button
                  onClick={onClickCancel}
                  className="p-[10px] rounded text-text-secondary"
                >
                  Cancelar
                </button>
              </>
            )}
            {loadingSave && <Spinner />}
          </div>
        )}

        {!isEdit && (
          <div className="pt-4  border-t border-t-slate-200">
            {!loadingSave ? (
              <>
                {" "}
                <p className="text-sm text-text-secondary">
                  ¿Desea{" "}
                  <strong>
                    {data.isAvailable ? "deshabilitar" : "habilitar"}
                  </strong>{" "}
                  el centro de vacunación?
                </p>
                <button
                  onClick={onClickAvailability}
                  className="bg-primary rounded mt-4 text-white p-[10px]"
                >
                  {data.isAvailable ? "Deshabilitar" : "Habilitar"}
                </button>
              </>
            ) : (
              <Spinner />
            )}
          </div>
        )}
      </section>
    );

  return (
    <div>
      <Spinner />
    </div>
  );
}

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "../../../../shared";
import GoogleMap from "../../../../shared/Map/Map";
import tailwindCssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";
import { UpdateVaccineCenter } from "../../Domain/model/UpdateVaccineCenter.model";
import useConfiguration from "../hooks/useConfiguration";
import useGetVaccineCenter from "../hooks/useGetVaccineCenter";
import useUpdateVaccineCenter from "../hooks/useUpdateVaccineCenter";
import DetailInformation from "./DetailInformation";
import { useToast } from "@chakra-ui/toast";
import Toast from "../../../../shared/Toast/Toast";
import Modal from "../../../../shared/Modal/Modal";

export default function InformationSection() {
  const { data, isLoading, refetch } = useGetVaccineCenter();
  const { isEdit, onClickCancel, onClickEdit, setIsEdit } = useConfiguration();
  const { register, getValues } = useForm<UpdateVaccineCenter>();
  const {
    mutate,
    isLoading: loadingSave,
    isSuccess,
  } = useUpdateVaccineCenter();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);
  const onClickSave = () => {
    if (data !== undefined) {
      mutate(
        {
          endHour: getValues("endHour"),
          id: data.id,
          startHour: getValues("startHour"),
        },
        {
          onSuccess: () => {
            toast({
              duration: 2500,
              isClosable: true,
              render: () => (
                <Toast
                  title="Éxisto"
                  description="Los cambios se guardaron exitosamente"
                />
              ),
            });
          },
        }
      );
      setIsEdit(false);
    }
  };

  const onClickAvailability = () => {
    if (data !== undefined) {
      mutate(
        {
          id: data.id,
          isAvailable: !data.isAvailable,
        },
        {
          onSuccess: () => {
            setVisibleModal(false);
            toast({
              duration: 2500,
              isClosable: true,
              render: () => (
                <Toast
                  title="Éxito"
                  description="Se ha modificado la disponibilidad"
                />
              ),
            });
          },
          onError: () => {
            setVisibleModal(false);
            toast({
              duration: 2500,
              isClosable: true,
              render: () => (
                <Toast
                  title="Error"
                  description="Ha sucedido un error, vuelva a intentarlo"
                />
              ),
            });
          },
        }
      );
    }
  };
  if (data !== undefined && !isLoading)
    return (
      <>
        <Modal
          action={data.isAvailable ? "Deshabilitar" : "Habilitar"}
          description={`¿Desea ${
            data.isAvailable ? "Deshabilitar" : "Habilitar"
          } el centro de vacunación?`}
          isVisible={visibleModal}
          onCancel={() => setVisibleModal(false)}
          onSubmit={onClickAvailability}
          isLoading={loadingSave}
        />
        <section className="w-full h-full">
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
                  "text-base bg-gray-200 px-4 py-2 font-medium text-text-default mr-7"
                )}
              >
                Editar
              </button>
            )}
          </div>
          <div className="flex-col-reverse flex lg:flex-row w-full h-full">
            <div className="w-full mb-4 lg:mb-0 lg:w-2/4 mr-20">
              <DetailInformation label="Nombre" value={data.name} />
              <DetailInformation label="Dirección" value={data.direction} />
              <DetailInformation
                label="Distrito"
                value={data.ubigeo.district}
              />
              <DetailInformation
                multiple
                editable={isEdit}
                inputsProps={[
                  register("startHour", {
                    value: data.businessHour.split(" ")[0],
                  }),
                  register("endHour", {
                    value: data.businessHour.split(" ")[2],
                  }),
                ]}
                label="Horario de atención"
                value={data.businessHour}
              />
              <DetailInformation label="DIRIS" value={data.diris} />
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
                        onClick={() => setVisibleModal(true)}
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
            </div>
            <div className="w-full h-[400px] mb-4  lg:h-4/4 lg:mb-0">
              <GoogleMap coordinates={data.localization} />
            </div>
          </div>
        </section>
      </>
    );

  return (
    <div>
      <Spinner />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Spinner } from "../../../../shared";
import Modal from "../../../../shared/Modal/Modal";
import tailwindCssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";
import useGetAllVacines from "../../../CreateVaccineCenter/Application/hooks/useGetAllVacines";
import { Vaccine } from "../../../Vaccines/Domain/model/Vaccine";
import useAddVaccineToInventory from "../hooks/useAddVaccineToInventory";
import useGetAllInventory from "../hooks/useGetAllInventory";
import { useToast } from "@chakra-ui/toast";
import Toast from "../../../../shared/Toast/Toast";

export default function AllVacinesContainer() {
  const { data, isLoading } = useGetAllVacines();
  const { data: inventories, refetch, isRefetching } = useGetAllInventory();
  const { isLoading: loadingSubmit, mutate } = useAddVaccineToInventory();
  const [currentVaccine, setCurrentVaccine] = useState<Vaccine>({} as Vaccine);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const isAlreadyOnInventory = (vaccine: Vaccine): boolean => {
    if (inventories === undefined) return false;
    return inventories?.some((e) => e.vaccine.id === vaccine.id);
  };
  const toast = useToast();

  const onClickVaccine = (vaccine: Vaccine) => {
    if (!isAlreadyOnInventory(vaccine)) {
      setVisibleModal(true);
      setCurrentVaccine(vaccine);
    }
  };

  const onSubmitVaccine = () => {
    mutate(
      { quantity: 0, vaccineId: currentVaccine.id },
      {
        onSuccess: () => {
          setVisibleModal(false);
          refetch();
          toast({
            duration: 2500,
            isClosable: true,
            render: () => (
              <Toast
                title="Éxito"
                description="Se ha añadido la vacuna al inventario"
              />
            ),
          });
        },
      }
    );
  };
  if (isLoading || isRefetching) return <Spinner />;
  return (
    <div>
      <Modal
        action="Agregar"
        description="¿Desea añadir la vacuna a su inventario?"
        isVisible={visibleModal}
        onCancel={() => setVisibleModal(false)}
        onSubmit={onSubmitVaccine}
        isLoading={loadingSubmit}
      />
      {data !== undefined &&
        Object.keys(data).map((e) => (
          <div key={e}>
            <h3 className="font-semibold  mt-4 text-xl pb-1 border-b border-gray-300 mb-4">
              {e}
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-4">
              {data[e].map((vaccine) => (
                <div
                  onClick={() => onClickVaccine(vaccine)}
                  className={`relative w-fit p-2  rounded  flex flex-col items-center transition-all`}
                  key={vaccine.id}
                >
                  <p
                    className={`
                    transition-all
                    ${
                      isAlreadyOnInventory(vaccine)
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer  hover:text-primary"
                    }`}
                  >
                    {vaccine.name}
                  </p>

                  {isAlreadyOnInventory(vaccine) && (
                    <p
                      className={tailwindCssBuilder(
                        "text-xs",
                        "text-primary cursor-not-allowed"
                      )}
                    >
                      En inventario
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

import { useForm } from "react-hook-form";
import { Ubigeo } from "../../../Ubigeo/Domain/model/Ubigeo";
import { CreateVaccineCenter } from "../../Domain/model/CreateVaccineCenter";
import useGetAllUbigeo from "../hooks/useGetAllUbigeo";
import InformaticonSection from "./InformaticonSection";
import LocationSection from "./LocationSection";
import Stepper from "../../../../shared/Stepper/Stepper";
import VaccinesSection from "./VaccinesSection";
import useCreateVaccineCenter from "../hooks/useCreateVaccineCenter";
import useStepper from "../hooks/useStepper";
import useVaccineSelected from "../hooks/useVaccinesSelected";
import SuccessCreatedSection from "./SuccessCreatedSection";
import { useEffect } from "react";

export default function RegisterVaccineCenterContainer() {
  const { register, watch, handleSubmit, setValue } = useForm<CreateVaccineCenter>();
  const { data: ubigeos } = useGetAllUbigeo();
  const { mutate, isLoading, isSuccess } = useCreateVaccineCenter();
  const { isCurrentContainer, stepperOptions, onSelectNext } = useStepper();
  const { onSelectVaccine, vaccinesSelected } = useVaccineSelected();

  const onSubmit = (data: CreateVaccineCenter) => {
    mutate({ vaccinesSelected: vaccinesSelected, vaccineCenter: data });
  };

  useEffect(() => {
    if (isSuccess) {
      onSelectNext("Vacunas");
    }
  }, [isSuccess]);

  return (
    <section className="xs:w-screen px-8 py-8  lg:py-16 lg:px-40 md:w-[calc(100vw_-_360px)] h-full relative overflow-auto">
      <h1 className="xs:text-xl sm:text-3xl font-bold">Registro del centro de vacunación</h1>
      <Stepper stepperOptions={stepperOptions} />
      <form className="w-full h-[calc(80%)]" onSubmit={handleSubmit(onSubmit)}>
        {isCurrentContainer("Información") && (
          <InformaticonSection
            watch={watch}
            nameInput={register("name", { required: true })}
            hourEnd={register("hourEnd", { required: true })}
            hourStart={register("hourStart", { required: true })}
            onClickNext={onSelectNext}
          />
        )}
        {isCurrentContainer("Ubicación") && (
          <LocationSection
            watch={watch}
            setValue={setValue}
            ubigeos={ubigeos as Ubigeo[]}
            ubigeoId={register("ubigeoId")}
            direction={register("direction", { required: true })}
            localization={register("localization", { required: true })}
            diris={register("diris", { required: true })}
            onSelectBack={onSelectNext}
            onSelectNext={onSelectNext}
          />
        )}
        {isCurrentContainer("Vacunas") && (
          <VaccinesSection
            isLoading={isLoading}
            onSelectVaccine={onSelectVaccine}
            vaccinesSelected={vaccinesSelected}
            onSelectBack={onSelectNext}
          />
        )}
        {isSuccess && <SuccessCreatedSection />}
      </form>
    </section>
  );
}

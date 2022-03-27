import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Container from "../src/module/CreateVaccineCenter/Application/components/Main";
import useIsValidForCreate from "../src/module/CreateVaccineCenter/Application/hooks/useIsValidForCreate";
import { Spinner } from "../src/shared";
const CreateVaccineCneter: NextPage = () => {
  const { isLoading, data } = useIsValidForCreate();
  const router = useRouter();
  useEffect(() => {
    if (data?.flag === false) {
      router.replace("/");
    }
  }, [data, router]);
  if (isLoading)
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4">Validando datos</p>
        <Spinner />
      </div>
    );
  return (
    <div>
      <Head>
        <title>Crear centro de vacunación</title>
        <meta name="description" content="En donde me vacuno" />
      </Head>
      <main className="w-screen h-screen overflow-hidden relative flex">
        <aside className="hidden sm:block bg-red-50 h-full w-[360px] px-6 py-3">
          <Image alt="endondemevacuno" width={64} height={96} src="/icon.svg" />
          <h2 className="mt-6 mb-2 font-medium text-3xl">Bienvenido Raul!</h2>
          <p className="text-gray-500">
            Completa todos los campos para el registro de tu centro de
            vacunación
          </p>
        </aside>
        <Container />
      </main>
    </div>
  );
};

export default CreateVaccineCneter;

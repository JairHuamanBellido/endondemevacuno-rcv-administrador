import { useRouter } from "next/router";
import { HtmlHTMLAttributes, useEffect } from "react";
import { Spinner } from "../../../../shared";

interface Props extends HtmlHTMLAttributes<HTMLElement> {}

export default function SuccessCreatedSection({ ...props }: Props) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 2500);
  }, []);
  return (
    <div className="flex flex-col items-center" {...props}>
      <h2 className="text-primary text-2xl font-semibold mb-4">Enhorabuena</h2>
      <p className="text-base">
        Su registro de su centro de vacunación se ha realizado con éxito
      </p>

      <p className="text-sm text-gray-500 mb-4 mt-2">
        Estamos redirigiendo hacia el sistema administrador...
      </p>
      <Spinner />
    </div>
  );
}

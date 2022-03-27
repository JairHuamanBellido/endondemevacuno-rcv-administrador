import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HttpError } from "../../../core/types/HttpError";
import { ErrorContainer, Spinner } from "../../../shared";
import { HttpRestApiAuthenticationRequest } from "../Infrastructure/model/HttpRestApiAuthenticationRequest";
import useAuthentication from "./hooks/useAuthentication";

export default function FormLogin() {
  const { register, handleSubmit } =
    useForm<HttpRestApiAuthenticationRequest>();
  const { mutate, isLoading, isError, error } = useAuthentication();
  const [isChecked, setIsCheked] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = (data: HttpRestApiAuthenticationRequest) => {
    mutate(data, {
      onSuccess: (e) => {
        if (isChecked) {
          localStorage.setItem("token", e.token);
          localStorage.setItem("userId", e.userId);
          localStorage.setItem("isRemember", "true");
        } else {
          sessionStorage.setItem("token", e.token);
          sessionStorage.setItem("userId", e.userId);
          localStorage.setItem("isRemember", "false");
        }

        router.replace("/create-vaccine-center");
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Correo electrónico"
      />
      <input
        {...register("password", { required: true })}
        autoComplete="on"
        type="password"
        placeholder="Contraseña"
      />
      <div className="forgot-password">
        <label className="checkbox-container">
          <input
            onChange={() => {
              setIsCheked(!isChecked);
            }}
            type="checkbox"
          />
          <span className="checkmark"></span>
          Recordar sesión
        </label>
      </div>
      {isError && <ErrorContainer error={error as HttpError} />}
      {!isLoading && <button type="submit">Ingresar</button>}
      {isLoading && <Spinner />}
    </form>
  );
}

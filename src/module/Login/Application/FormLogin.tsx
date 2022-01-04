import { useForm } from "react-hook-form";
import { HttpError } from "../../../core/types/HttpError";
import { ErrorContainer, Spinner } from "../../../shared";
import { HttpRestApiAuthenticationRequest } from "../Infrastructure/model/HttpRestApiAuthenticationRequest";
import useAuthentication from "./hooks/useAuthentication";

export default function FormLogin() {
  const { register, handleSubmit } =
    useForm<HttpRestApiAuthenticationRequest>();
  const { mutate, isLoading, isError, isSuccess, error } = useAuthentication();

  const onSubmit = (data: HttpRestApiAuthenticationRequest) => {
    mutate(data);
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
          <input type="checkbox" />
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

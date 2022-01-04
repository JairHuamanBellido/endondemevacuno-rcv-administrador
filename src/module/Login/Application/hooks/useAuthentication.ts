import { useMutation } from "react-query";
import { HttpError } from "../../../../core/types/HttpError";
import { AuthenticationService } from "../../Domain/service/AuthenticationService";
import { HttpRestApiAuthenticationRequest as Payload } from "../../Infrastructure/model/HttpRestApiAuthenticationRequest";

export default function useAuthentication() {
  const mutation = useMutation<any, HttpError, Payload>((payload) =>
    AuthenticationService.execute(payload)
  );

  return mutation;
}

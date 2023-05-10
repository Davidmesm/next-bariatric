import validator from "validator";
import { LoginFormType } from "../types";

export type LoginFormError = {
  email?: string;
  password?: string;
};

export default function LoginFormValidator(values: LoginFormType) {
  let error: LoginFormError = {};

  if (validator.isEmpty(values.email)) {
    error.email = "El correo electrónico es requerido.";
  } else if (!validator.isEmail(values.email)) {
    error.email = "El formato del correo electrónico es invalido.";
  }

  if (validator.isEmpty(values.password)) {
    error.password = "La contraseña es requerida.";
  }

  return error;
}

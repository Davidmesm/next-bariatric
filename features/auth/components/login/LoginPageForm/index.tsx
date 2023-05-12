"use client";
import * as React from "react";
import { useFormik } from "formik";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import ErrorAlert from "./components/ErrorAlert"
import { LoginFormValidator } from "@/features/auth/validators";
import { LoginFormType } from "../../../types/index";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export interface ILoginPageFormProps {
}

export default function LoginPageForm(props: ILoginPageFormProps) {
  const router = useRouter()

  const [signInError, setSignInError] = useState<string | undefined>();

  const handleOnSubmit = (values: LoginFormType) => {
    router.push('/');
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: LoginFormValidator,
    onSubmit: handleOnSubmit,
  });

  return (
    <>
      {signInError && <ErrorAlert error={signInError || ""} />}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <EmailInput
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <PasswordInput
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}

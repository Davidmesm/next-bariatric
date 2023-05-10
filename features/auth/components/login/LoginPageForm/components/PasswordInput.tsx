import * as React from "react";

export interface IPasswordInputProps {
  id: string,
  name: string,
  value: string;
  touched?: boolean;
  onChange: (event: React.ChangeEvent<any>) => void;
  onBlur: (event: React.FocusEvent<any>) => void;
  error?: string;
}

export default function PasswordInput(props: IPasswordInputProps) {
  const { id, name, value, error, touched, onChange, onBlur } = props;

  const hasErrorClass = (typeof error === "undefined" || !touched) ? "" : "border-red-500";

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        Contraseña
      </label>
      <input
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${hasErrorClass}`}
        id={id}
        name={name}
        type="password"
        placeholder="**********"
        autoComplete="current-password"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {(touched === true && error) && (
        <p className="text-red-500 text-xs mt-1 pl-2 font-semibold">
          {error || ""}
        </p>
      )}
    </div>
  );
}

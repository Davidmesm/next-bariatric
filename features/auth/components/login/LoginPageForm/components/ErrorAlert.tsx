import * as React from "react";

export interface IErrorAlertProps {
  error: string;
}

export default function ErrorAlert(props: IErrorAlertProps) {
  const { error } = props;

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded relative"
      role="alert"
    >
      <strong className="font-bold mr-2">Error:</strong>
      <span className="block sm:inline">{error}</span>
    </div>
  );
}

import { ReactNode } from "react";

type LoadingOverlayProps = {
  loading: boolean;
  children?: ReactNode;
};

const LoadingOverlay = ({ loading, children }: LoadingOverlayProps) => {
  return (
    <>
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50">
          <div className="flex justify-center items-center h-screen">
            <span className="animate-spin w-16 h-16 border-solid border-4 border-gray-800 border-b-gray-400 rounded-full"></span>
          </div>
        </div>
      )}
      <div className={loading ? "blur-sm" : ""}>{children}</div>
    </>
  );
};

export default LoadingOverlay;

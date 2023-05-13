import Image from "next/image";

export default function LoginPageTitle () {
  return (
    <div className="max-w-7xl mx-auto pb-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div>
          <Image
            src="/BariatricLogo.png"
            alt="Logo"
            width={50}
            height={50}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900">¡Bienvenido!</h1>
          <p className="text-gray-600">Inicie sesión en su cuenta</p>
        </div>
      </div>
  );
}

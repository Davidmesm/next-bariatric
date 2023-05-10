import { ReactNode } from 'react';

export interface IAuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({children}: IAuthLayoutProps) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <div className='flex-grow flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
}

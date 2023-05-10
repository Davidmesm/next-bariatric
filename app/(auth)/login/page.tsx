import { LoginPageForm, LoginPageTitle } from "@/features/auth/components"
import { LoginFormType } from '../../../features/auth/types/index';


export interface ILoginPageProps {
}

export default function LoginPage(props: ILoginPageProps) {
  return (
    <div className="w-full max-w-md px-2">
        <LoginPageTitle/>
        <LoginPageForm/>
    </div>
  );
}

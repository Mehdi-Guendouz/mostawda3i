import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import registerImage from "../assets/img/register-image.png";
import { UserSignupForm } from "@/components/Forms/UserSignupForm";

const RegisterPage = () => {
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={"absolute right-4 top-4 md:right-8 md:top-8"}
        >
          login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="relative z-20 text-lg font-medium">
            <img
              src={logo}
              alt="logo"
              className="w-[200px] h-[70.377px] absolute left-0 top-0 translate-x-[-60px]"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img src={registerImage} alt="logo" className="w-fit h-fit " />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 ">
              <h1 className="text-2xl font-semibold tracking-tight text-primary-blue">
                S’inscrire
              </h1>
              <p className="text-sm text-muted-foreground text-secondary-gray-600">
                Créez un compte et rejoignez-nous !
              </p>
            </div>
            <UserSignupForm />
            <p className=" text-sm text-text-blue">
              Vous avez déjà un compte?{" "}
              <Link
                to="/login"
                className="underline underline-offset-4 hover:text-primary text-primary-blue"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

import { Button } from "../ui/button";
import secondImg from "../../assets/img/landing-page-second.png";

const Contact = () => {
  return (
    <div className="flex items-center py-10">
      <div className="min-w-[600px] max-w-[750px] flex flex-col gap-4">
        <h1 className="text-[28px] text-secondary-creamy-blue font-bold">
          Choisissez <span className="text-primary-blue">MOUSTAWDA3I</span>
          <br /> pour une gestion simplifiée et une <br /> croissance stimulée.
          Rejoignez-nous dès <br /> aujourd'hui !
        </h1>
        <div className="flex items-center gap-4">
          <Button className="rounded-xl bg-primary-blue text-white text-base font-bold py-4 px-10">
            S’inscrire
          </Button>
          <Button
            variant={"default"}
            className="text-primary-blue bg-secondary-gray-300 rounded-xl text-base font-bold py-4 px-10"
          >
            Se connecter
          </Button>
        </div>
      </div>
      <div className="w-fit">
        <img src={secondImg} alt="state image" />
      </div>
    </div>
  );
};

export default Contact;

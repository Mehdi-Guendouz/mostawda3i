import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 w-full h-[80vh]">
      <div className="min-w-[600px] max-w-[750px]">
        <h1 className="text-center text-4xl text-secondary-creamy-blue font-bold leading-[60px]">
          Bienvenue sur <span className="text-primary-blue">MOUSTAWDA3I</span>
          <br /> Votre Solution Complète de Gestion <br /> d'Inventaire et de
          Finances pour les Petits <br /> Commerces en Algérie. <br /> Optimisez
          votre business dès aujourd'hui !
        </h1>
      </div>
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
  );
};

export default Hero;

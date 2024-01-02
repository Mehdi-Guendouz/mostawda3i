import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Button } from "../ui/button";

const Links = [
  {
    title: "Accueil",
    id: 1,
    path: "/",
  },
  {
    title: "A propos",
    id: 2,
    path: "/",
  },
  {
    title: "Nous contacter",
    id: 3,
    path: "/",
  },
];

const NaveBar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-4 ">
      <img src={logo} alt="logo" className="w-[200px] h-fit" />
      <nav className="w-full ml-20 flex items-center justify-center">
        <ul className="flex items-center gap-8">
          {Links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="text-secondary-creamy-blue text-xl font-normal hover:text-primary-blue duration-300  "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          variant={"default"}
          className="text-primary-blue bg-secondary-gray-300 rounded-xl text-base font-bold py-6 px-4"
        >
          Se connecter
        </Button>
        <Button className="rounded-xl bg-primary-blue text-white text-base font-bold py-6 px-4">
          S’inscrire
        </Button>
      </div>
    </div>
  );
};

export default NaveBar;

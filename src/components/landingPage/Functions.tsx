import firstImg from "../../assets/img/landing-page-first.png";

const Functions = () => {
  return (
    <div className="flex items-center justify-between flex-col gap-10 py-6">
      <h2 className="text-secondary-creamy-blue text-[40px] font-bold text-center w-full">
        Nos <span className="text-primary-blue">Fonctionnalités</span>
      </h2>
      <div className="flex items-center py-10">
        <div className="w-fit">
          <img src={firstImg} alt="state image" />
        </div>
        <div className="min-w-[600px] max-w-[600px] flex items-center justify-center flex-col h-full gap-5">
          <h4 className=" font-bold text-primary-blue text-3xl">
            Explorez les outils puissants qui transforment votre commerce{" "}
          </h4>
          <ul className="text-secondary-creamy-blue font-medium text-xl list-disc flex flex-col gap-4">
            <li>
              Ajoutez aisément de nouveaux produits et spécifiez leurs
              caractéristiques en un clin d'œil.
            </li>
            <li>
              Suivez l'état de tous vos articles, surveillez les quantités
              disponibles, et bien plus encore pour une gestion optimale.
            </li>
            <li>
              Explorez le Tableau de Bord Financier pour visualiser vos
              dépenses, revenus, profit, et la valeur de votre stock. Profitez
              de graphiques détaillés et de recommandations avisées pour
              propulser votre succès
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Functions;

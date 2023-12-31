const featuresItems = [
  {
    title: "Facilité",
    description:
      "Notre plateforme rend chaque tâche, de l'ajout de produits à la surveillance des stocks, incroyablement simple.",
    id: 1,
  },
  {
    title: "Optimisation",
    description:
      "Des outils puissants pour améliorer chaque aspect de vos opérations. Prenez des décisions éclairées pour une rentabilité accrue.",
    id: 2,
  },
  {
    title: "Centralisation",
    description:
      "Toutes les informations essentielles au même endroit. Plus besoin de jongler entre différentes plateformes.",
    id: 3,
  },
  {
    title: "Économie",
    description:
      "Notre solution est conçue pour économiser votre argent. Des processus plus efficaces signifient une gestion plus rentable.",
    id: 4,
  },
];

const Features = () => {
  return (
    <div className="flex items-center justify-center w-full py-10 px-4 ">
      <div className="flex items-center flex-col gap-20">
        <h2 className="text-secondary-creamy-blue text-[40px] font-bold text-center w-full">
          <span className="text-primary-blue">Pourquoi</span> Nous Choisir?
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {featuresItems.map((item) => (
            <div
              className="bg-secondary-gray-300 text-primary-blue flex items-center justify-start gap-3 py-3 px-2 flex-col rounded-xl h-[220px]"
              key={item.id}
            >
              <div className="flex items-center justify-center h-[50px]">
                <h4 className="text-2xl font-bold text-center ">
                  {item.title}
                </h4>
              </div>
              <p className="text-xl font-normal text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

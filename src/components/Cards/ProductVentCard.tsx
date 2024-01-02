import { BarChartComponent } from "../Charts/BarChartComponent";

const ProductVentCard = () => {
  return (
    <div className="bg-white rounded-xl py-6 px-4">
      <div className="h-40 py-1">
        <h4 className="text-primary-blue text-3xl font-bold">
          Produits Vendus
        </h4>
        <span className="text-[#05CD99] text-sm font-bold">+23% </span>
        <span className="text-secondary-creamy-blue font-normal">ce mois</span>
      </div>
      <div>
        <BarChartComponent />
      </div>
    </div>
  );
};

export default ProductVentCard;

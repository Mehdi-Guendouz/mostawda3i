import DashboardCard from "@/components/Cards/DashboardCard";
import ProductVentCard from "@/components/Cards/ProductVentCard";
import { Icons } from "@/components/Icons";
import AddDepenseModal from "@/components/Modals/AddDepenseModal";
import { CommandColum, Commands } from "@/components/Tables/CommandsColums";
import { DataTableCommand } from "@/components/Tables/DataTableCommand";
import PageTitle from "@/components/Text/PageTitle";
import { Link } from "react-router-dom";

const commandsData: Commands[] = [
  {
    id: "1",
    product: "Product A",
    prix: 20.5,
    date: new Date("2024-01-01T10:30:00"),
    status: "Achevée",
  },
  {
    id: "2",
    product: "Product B",
    prix: 15.75,
    date: new Date("2024-01-02T15:45:00"),
    status: "Annulée",
  },
  {
    id: "3",
    product: "Product C",
    prix: 30.0,
    date: new Date("2024-01-03T12:15:00"),
    status: "Retournée",
  },
  {
    id: "4",
    product: "Product D",
    prix: 25.0,
    date: new Date("2024-01-04T09:00:00"),
    status: "Achevée",
  },
  {
    id: "5",
    product: "Product E",
    prix: 18.25,
    date: new Date("2024-01-05T14:20:00"),
    status: "Annulée",
  },
  {
    id: "6",
    product: "Product F",
    prix: 22.0,
    date: new Date("2024-01-06T11:30:00"),
    status: "Retournée",
  },
  {
    id: "7",
    product: "Product G",
    prix: 28.5,
    date: new Date("2024-01-07T08:45:00"),
    status: "Achevée",
  },
  {
    id: "8",
    product: "Product H",
    prix: 15.0,
    date: new Date("2024-01-08T17:15:00"),
    status: "Annulée",
  },
  {
    id: "9",
    product: "Product I",
    prix: 19.75,
    date: new Date("2024-01-09T13:00:00"),
    status: "Retournée",
  },
  {
    id: "10",
    product: "Product J",
    prix: 24.5,
    date: new Date("2024-01-10T16:30:00"),
    status: "Achevée",
  },
];

const Dashboard = () => {
  return (
    <div className=" space-y-2 min-h-screen py-6">
      <div className="flex px-4 justify-between items-center">
        <PageTitle title="Finances" />
        <AddDepenseModal />
      </div>
      <div className="flex items-start justify-start gap-5 flex-wrap py-6">
        <DashboardCard
          amount={2000}
          title="Ventes"
          icon={<Icons.arrowStock />}
        />
        <DashboardCard
          amount={12000}
          title="Profit"
          icon={<Icons.arrowStock className="rotate-90" />}
        />
        <DashboardCard amount={2000} title="Ventes" icon={<Icons.coins />} />
        <DashboardCard
          amount={2000}
          title="Valeur du stock"
          icon={<Icons.box />}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-xl ">
          <div className="flex items-center justify-between px-4">
            <h4 className="text-primary-blue text-3xl font-bold py-6">
              Dernières Ventes
            </h4>
            <Link
              to="/"
              className="capitalize bg-secondary-gray-300 py-2 px-5 rounded-xl"
            >
              tout afficher
            </Link>
          </div>
          <DataTableCommand columns={CommandColum} data={commandsData} />
        </div>
        <ProductVentCard />
      </div>
    </div>
  );
};

export default Dashboard;

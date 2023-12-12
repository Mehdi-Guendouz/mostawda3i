import DashboardCard from "@/components/Cards/DashboardCard";
import { Icons } from "@/components/Icons";
import PageTitle from "@/components/Text/PageTitle";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className=" space-y-2 h-screen">
      <div className="flex px-4 justify-between items-center">
        <PageTitle title="Finances" />
        <Button className="bg-white group text-[#2B3674] flex items-center justify-center  gap-5 py-6 px-10">
          <span className="flex items-center justify-center rounded-base py-2 px-3 bg-background ">
            <Icons.FaPlus className="" />
          </span>
          Nouvelle Vente
        </Button>
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
    </div>
  );
};

export default Dashboard;

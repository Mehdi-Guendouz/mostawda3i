import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type DashboardCardProps = {
  title: string;
  amount: number;
  icon: JSX.Element;
};

const DashboardCard = ({ title, amount, icon }: DashboardCardProps) => {
  return (
    <Card className="max-w-[370px] min-w-[370px] py-3 flex justify-center gap-2 flex-col border-none">
      <CardHeader className="flex flex-row items-center gap-9 space-y-0 pb-2">
        <div className="flex items-center justify-center rounded-base w-[50px] h-[50px] bg-background">
          {icon}
        </div>
        <CardTitle className="font-bold text-secondary-creamy-blue text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="text-2xl font-bold text-primary-blue">{amount} DA</div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

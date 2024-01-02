import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type CollapItemsProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const CollapItems = ({ title, children }: CollapItemsProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full">{title}</CollapsibleTrigger>
      <CollapsibleContent className="ml-4">{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapItems;

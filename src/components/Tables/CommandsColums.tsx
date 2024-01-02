import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { Icons } from "../Icons";

export type Commands = {
  id: string;
  product: string;
  prix: number;
  date: Date;
  status: "Achevée" | "Annulée" | "Retournée";
};

const getIcon = (status: string) => {
  switch (status) {
    case "Achevée":
      return <Icons.check className="h-6 w-6" />;
    case "Annulée":
      return <Icons.annuler className="h-6 w-6" />;
    case "Retournée":
      return <Icons.pending className="h-6 w-6" />;
    default:
      return <Icons.check className="h-6 w-6" />;
  }
};

export const CommandColum: ColumnDef<Commands>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Produit
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "prix",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Monant
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <span className="flex items-center gap-1">
          {getIcon(status)}
          {status}
        </span>
      );
    },
  },
];

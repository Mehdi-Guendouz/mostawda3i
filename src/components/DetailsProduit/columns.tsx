import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type DetailProduit = {
  id: string
  nomProduit : string
  prixAchat : number 
  prixVente : number
  quantite : number
  dateAchat : string
}

export const columns: ColumnDef<DetailProduit>[] = [
  {
    accessorKey: "nomProduit",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            Nom Produit
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "prixAchat",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            Prix Achat
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {
      const achatPrix = parseFloat(row.getValue("prixAchat"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "DZD",
      }).format(achatPrix)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "prixVente",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            Prix Vente
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {
      const ventePrix = parseFloat(row.getValue("prixVente"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "DZD",
      }).format(ventePrix)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "quantite",
    header: () => <div className="text-gray-400 px-8">Quantité</div>,
  },
  {
    accessorKey: "dateAchat",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            Date Achat
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const detailProduit = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(detailProduit.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


import { useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Edit, Trash } from "react-feather"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { ModifierAchat } from '@/pages/ModifierAchat'; 

export type AchatProduit = {
  id_Achat : string
  id_Produit : string
  id_Variante : string 
  Date : string
  quantite : number
  montant : number
  Fournisseur : string
}

export const columns: ColumnDef<AchatProduit>[] = [  {
    accessorKey: "id_Achat",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            id Achat
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "id_Produit",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            id Produit
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "id_Variante",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
            className="text-gray-400 hover:bg-transparent px-8"
          >
            id Variante
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "Date",
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
    accessorKey: "quantite",
    header: () => <div className="text-gray-400 px-8">Quantité</div>,
  },
  {
    accessorKey: "montant",
    header: () => <div className="text-gray-400 px-8">Montant</div>,
  },
  {
    accessorKey: "Fournisseur",
    header: () => <div className="text-gray-400 px-8">Fournisseur</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const achat = row.original;
      return (
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost">
                  <Edit className="h-4 w-4 mr-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-fit">
              <ModifierAchat />
            </DialogContent>
          </Dialog>
          <Button
            variant="ghost"
            onClick={() => {
              console.log(achat.id_Achat);
            }}
          >
            <Trash className="h-4 w-4 mr-2 text-red-500" />
          </Button>
        </div>
      );
    },
  },
]; 
import { AchatProduit, columns } from "@/components/Achat/columnsA";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "react-feather";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AjouterAchat } from "./AjouterAchat";

const achat: AchatProduit[] = [
  {
    id_Achat: "1",
    id_Produit: "101",
    id_Variante: "201",
    Date: "2023-05-05",
    quantite: 100,
    montant: 1500,
    Fournisseur: "Supplier A",
  },
  {
    id_Achat: "2",
    id_Produit: "102",
    id_Variante: "202",
    Date: "2023-05-10",
    quantite: 200,
    montant: 2200,
    Fournisseur: "Supplier B",
  },
  {
    id_Achat: "3",
    id_Produit: "103",
    id_Variante: "203",
    Date: "2023-05-15",
    quantite: 150,
    montant: 1800,
    Fournisseur: "Supplier C",
  },
  {
    id_Achat: "4",
    id_Produit: "104",
    id_Variante: "204",
    Date: "2023-05-20",
    quantite: 120,
    montant: 1600,
    Fournisseur: "Supplier D",
  },
  {
    id_Achat: "5",
    id_Produit: "105",
    id_Variante: "205",
    Date: "2023-05-25",
    quantite: 180,
    montant: 2400,
    Fournisseur: "Supplier E",
  },
  {
    id_Achat: "6",
    id_Produit: "106",
    id_Variante: "206",
    Date: "2023-05-30",
    quantite: 90,
    montant: 1200,
    Fournisseur: "Supplier F",
  },
  {
    id_Achat: "7",
    id_Produit: "107",
    id_Variante: "207",
    Date: "2023-06-05",
    quantite: 250,
    montant: 3000,
    Fournisseur: "Supplier G",
  },
  {
    id_Achat: "8",
    id_Produit: "108",
    id_Variante: "208",
    Date: "2023-06-10",
    quantite: 130,
    montant: 1700,
    Fournisseur: "Supplier H",
  },
  {
    id_Achat: "9",
    id_Produit: "109",
    id_Variante: "209",
    Date: "2023-06-15",
    quantite: 200,
    montant: 2500,
    Fournisseur: "Supplier I",
  },
  {
    id_Achat: "10",
    id_Produit: "110",
    id_Variante: "210",
    Date: "2023-06-20",
    quantite: 160,
    montant: 2000,
    Fournisseur: "Supplier J",
  },
  {
    id_Achat: "11",
    id_Produit: "111",
    id_Variante: "211",
    Date: "2023-06-25",
    quantite: 220,
    montant: 2700,
    Fournisseur: "Supplier K",
  },
  {
    id_Achat: "12",
    id_Produit: "112",
    id_Variante: "212",
    Date: "2023-06-30",
    quantite: 110,
    montant: 1500,
    Fournisseur: "Supplier L",
  },
  {
    id_Achat: "13",
    id_Produit: "113",
    id_Variante: "213",
    Date: "2023-07-05",
    quantite: 190,
    montant: 2200,
    Fournisseur: "Supplier M",
  },
  {
    id_Achat: "14",
    id_Produit: "114",
    id_Variante: "214",
    Date: "2023-07-10",
    quantite: 140,
    montant: 1800,
    Fournisseur: "Supplier N",
  },
  {
    id_Achat: "15",
    id_Produit: "115",
    id_Variante: "215",
    Date: "2023-07-15",
    quantite: 120,
    montant: 1600,
    Fournisseur: "Supplier O",
  },
  {
    id_Achat: "16",
    id_Produit: "116",
    id_Variante: "216",
    Date: "2023-07-20",
    quantite: 170,
    montant: 2100,
    Fournisseur: "Supplier P",
  },
  {
    id_Achat: "17",
    id_Produit: "117",
    id_Variante: "217",
    Date: "2023-07-25",
    quantite: 210,
    montant: 2500,
    Fournisseur: "Supplier Q",
  },
  {
    id_Achat: "18",
    id_Produit: "118",
    id_Variante: "218",
    Date: "2023-07-30",
    quantite: 80,
    montant: 1000,
    Fournisseur: "Supplier R",
  },
  {
    id_Achat: "19",
    id_Produit: "119",
    id_Variante: "219",
    Date: "2023-08-05",
    quantite: 300,
    montant: 4500,
    Fournisseur: "Supplier S",
  },
  {
    id_Achat: "20",
    id_Produit: "120",
    id_Variante: "220",
    Date: "2023-08-10",
    quantite: 180,
    montant: 2700,
    Fournisseur: "Supplier T",
  },
  {
    id_Achat: "21",
    id_Produit: "121",
    id_Variante: "221",
    Date: "2023-08-15",
    quantite: 250,
    montant: 3000,
    Fournisseur: "Supplier U",
  },
];

export default function AchatProduits() {
  return (
    <div>
      <div className="flex items-center justify-between mt-10">
        <h3 className="font-bold text-4xl text-title-blue">Achats</h3>
        <Dialog>
          <DialogTrigger>
            <Button className="font-bold text-title-blue border border-title-blue bg-white">
              <Plus className="h-5 w-5 mr-2" />
              Ajouter achat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-fit">
            <AjouterAchat />
          </DialogContent>
        </Dialog>
      </div>
      <div className="container mx-auto py-10">
        <DataTable
          tabletitle="Derniers Achats"
          columns={columns}
          data={achat}
          filterColumnKey="Fournisseur"
        />
      </div>
    </div>
  );
}

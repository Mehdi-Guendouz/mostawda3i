import { VenteProduit, columns } from "@/components/Achat/columnsV"
import { DataTable } from "@/components/ui/data-table"
import { Plus } from 'react-feather';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AjouterVente } from "./AjouterVente";

const vente: VenteProduit[] = [
    {
      id_Vente: "1",
      id_Produit: "101",
      id_Variante: "201",
      Date: "2023-05-05",
      quantite: 100,
      montant: 1500,
      client: "Client A",
    },
    {
      id_Vente: "2",
      id_Produit: "102",
      id_Variante: "202",
      Date: "2023-05-10",
      quantite: 200,
      montant: 2200,
      client: "Client B",
    },
    {
      id_Vente: "3",
      id_Produit: "103",
      id_Variante: "203",
      Date: "2023-05-15",
      quantite: 150,
      montant: 1800,
      client: "Client C",
    },
    {
      id_Vente: "4",
      id_Produit: "104",
      id_Variante: "204",
      Date: "2023-05-20",
      quantite: 120,
      montant: 1600,
      client: "Client D",
    },
    {
      id_Vente: "5",
      id_Produit: "105",
      id_Variante: "205",
      Date: "2023-05-25",
      quantite: 180,
      montant: 2400,
      client: "Client E",
    },
    {
      id_Vente: "6",
      id_Produit: "106",
      id_Variante: "206",
      Date: "2023-05-30",
      quantite: 90,
      montant: 1200,
      client: "Client F",
    },
    {
      id_Vente: "7",
      id_Produit: "107",
      id_Variante: "207",
      Date: "2023-06-05",
      quantite: 250,
      montant: 3000,
      client: "Client G",
    },
    {
      id_Vente: "8",
      id_Produit: "108",
      id_Variante: "208",
      Date: "2023-06-10",
      quantite: 130,
      montant: 1700,
      client: "Client H",
    },
    {
      id_Vente: "9",
      id_Produit: "109",
      id_Variante: "209",
      Date: "2023-06-15",
      quantite: 200,
      montant: 2500,
      client: "Client I",
    },
    {
      id_Vente: "10",
      id_Produit: "110",
      id_Variante: "210",
      Date: "2023-06-20",
      quantite: 160,
      montant: 2000,
      client: "Client J",
    },
    {
      id_Vente: "11",
      id_Produit: "111",
      id_Variante: "211",
      Date: "2023-06-25",
      quantite: 220,
      montant: 2700,
      client: "Client K",
    },
    {
      id_Vente: "12",
      id_Produit: "112",
      id_Variante: "212",
      Date: "2023-06-30",
      quantite: 110,
      montant: 1500,
      client: "Client L",
    },
    {
      id_Vente: "13",
      id_Produit: "113",
      id_Variante: "213",
      Date: "2023-07-05",
      quantite: 190,
      montant: 2200,
      client: "Client M",
    },
    {
      id_Vente: "14",
      id_Produit: "114",
      id_Variante: "214",
      Date: "2023-07-10",
      quantite: 140,
      montant: 1800,
      client: "Client N",
    },
    {
      id_Vente: "15",
      id_Produit: "115",
      id_Variante: "215",
      Date: "2023-07-15",
      quantite: 120,
      montant: 1600,
      client: "Client O",
    },
    {
      id_Vente: "16",
      id_Produit: "116",
      id_Variante: "216",
      Date: "2023-07-20",
      quantite: 170,
      montant: 2100,
      client: "Client P",
    },
    {
      id_Vente: "17",
      id_Produit: "117",
      id_Variante: "217",
      Date: "2023-07-25",
      quantite: 210,
      montant: 2500,
      client: "Client Q",
    },
    {
      id_Vente: "18",
      id_Produit: "118",
      id_Variante: "218",
      Date: "2023-07-30",
      quantite: 80,
      montant: 1000,
      client: "Client R",
    },
    {
      id_Vente: "19",
      id_Produit: "119",
      id_Variante: "219",
      Date: "2023-08-05",
      quantite: 300,
      montant: 4500,
      client: "Client S",
    },
    {
      id_Vente: "20",
      id_Produit: "120",
      id_Variante: "220",
      Date: "2023-08-10",
      quantite: 180,
      montant: 2700,
      client: "Client T",
    },
    {
      id_Vente: "21",
      id_Produit: "121",
      id_Variante: "221",
      Date: "2023-08-15",
      quantite: 250,
      montant: 3000,
      client: "Client U",
    },
  ];

export default  function VenteProduits() {

  return (
    <div>
      <div className="flex items-center justify-between mt-10">
        <h3 className="font-bold text-4xl text-title-blue">Ventes</h3>
        <Dialog>
            <DialogTrigger>
            <Button className="font-bold text-title-blue border border-title-blue bg-white"><Plus className="h-5 w-5 mr-2" />Ajouter vente</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-fit">
              <AjouterVente />
            </DialogContent>
          </Dialog>
      </div>
      <div className="container mx-auto py-10">
        <DataTable tabletitle="Dernières ventes" columns={columns} data={vente} filterColumnKey="client" />
      </div>
    </div>
  )
}

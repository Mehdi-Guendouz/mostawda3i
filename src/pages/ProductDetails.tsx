import { DetailProduit, columns } from "@/components/DetailsProduit/columns"
import { DataTable } from "@/components/ui/data-table"

const produits: DetailProduit[] = [
    {
      id: "1",
      nomProduit: "Laptop",
      prixAchat: 800,
      prixVente: 1200,
      quantite: 5,
      dateAchat: "2023-01-15",
    },
    {
      id: "2",
      nomProduit: "Smartphone",
      prixAchat: 500,
      prixVente: 700,
      quantite: 10,
      dateAchat: "2023-02-20",
    },
    {
      id: "3",
      nomProduit: "Headphones",
      prixAchat: 50,
      prixVente: 80,
      quantite: 15,
      dateAchat: "2023-03-10",
    },
    {
      id: "4",
      nomProduit: "Tablet",
      prixAchat: 300,
      prixVente: 450,
      quantite: 8,
      dateAchat: "2023-04-05",
    },
    {
      id: "5",
      nomProduit: "Camera",
      prixAchat: 200,
      prixVente: 300,
      quantite: 12,
      dateAchat: "2023-05-12",
    },
    {
      id: "6",
      nomProduit: "Printer",
      prixAchat: 150,
      prixVente: 250,
      quantite: 7,
      dateAchat: "2023-06-18",
    },
    {
      id: "7",
      nomProduit: "External Hard Drive",
      prixAchat: 100,
      prixVente: 150,
      quantite: 20,
      dateAchat: "2023-07-22",
    },
    {
      id: "8",
      nomProduit: "Wireless Mouse",
      prixAchat: 20,
      prixVente: 35,
      quantite: 25,
      dateAchat: "2023-08-30",
    },
    {
      id: "9",
      nomProduit: "Monitor",
      prixAchat: 250,
      prixVente: 400,
      quantite: 6,
      dateAchat: "2023-09-10",
    },
    {
      id: "10",
      nomProduit: "Gaming Console",
      prixAchat: 400,
      prixVente: 600,
      quantite: 9,
      dateAchat: "2023-10-15",
    },
    {
      id: "11",
      nomProduit: "Keyboard",
      prixAchat: 30,
      prixVente: 50,
      quantite: 15,
      dateAchat: "2023-11-05",
    },
    {
      id: "12",
      nomProduit: "Desk Chair",
      prixAchat: 80,
      prixVente: 120,
      quantite: 8,
      dateAchat: "2023-12-01",
    },
    {
      id: "13",
      nomProduit: "USB Flash Drive",
      prixAchat: 10,
      prixVente: 15,
      quantite: 30,
      dateAchat: "2024-01-10",
    },
    {
      id: "14",
      nomProduit: "Fitness Tracker",
      prixAchat: 60,
      prixVente: 90,
      quantite: 12,
      dateAchat: "2024-02-15",
    },
    {
      id: "15",
      nomProduit: "Coffee Maker",
      prixAchat: 40,
      prixVente: 60,
      quantite: 10,
      dateAchat: "2024-03-20",
    },
    {
      id: "16",
      nomProduit: "Bluetooth Speaker",
      prixAchat: 25,
      prixVente: 40,
      quantite: 18,
      dateAchat: "2024-04-05",
    },
    {
      id: "17",
      nomProduit: "Portable Charger",
      prixAchat: 15,
      prixVente: 25,
      quantite: 22,
      dateAchat: "2024-05-12",
    },
    {
      id: "18",
      nomProduit: "Backpack",
      prixAchat: 35,
      prixVente: 55,
      quantite: 14,
      dateAchat: "2024-06-18",
    },
    {
      id: "19",
      nomProduit: "Desk Lamp",
      prixAchat: 18,
      prixVente: 30,
      quantite: 25,
      dateAchat: "2024-07-22",
    },
    {
      id: "20",
      nomProduit: "Wireless Earbuds",
      prixAchat: 70,
      prixVente: 100,
      quantite: 8,
      dateAchat: "2024-08-30",
    },
    {
        id: "21",
        nomProduit: "Wireless Airpods",
        prixAchat: 100,
        prixVente: 200,
        quantite: 7,
        dateAchat: "2024-08-10",
      },
  ];
  
  
export default  function DetailsProduits() {
  

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={produits} />
    </div>
  )
}

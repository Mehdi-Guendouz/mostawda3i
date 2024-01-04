import { axiosInstance } from "@/api/config";
import PageTitle from "@/components/Text/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [unit, setUnit] = useState("");
  const [dimmensions, setDimmensions] = useState("");
  const [weight, setWeight] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [upc, setUpc] = useState("");
  const [theme, setTheme] = useState("");
  const [color, setColor] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [description, setDescription] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = {
      productType,
      productName,
      sku,
      unit,
      dimmensions,
      weight,
      manufacturer,
      brand,
      upc,
      theme,
      color,
      salePrice,
      description,
      purchasePrice,
    };
    setLoading(true);
    axiosInstance
      .post("/products", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductType("");
        setProductName("");
        setSku("");
        setUnit("");
        setDimmensions("");
        setWeight("");
        setManufacturer("");
        setBrand("");
        setUpc("");
        setTheme("");
        setColor("");
        setSalePrice("");
        setDescription("");
        setPurchasePrice("");
        setLoading(false);
      });
  };

  return (
    <div className="space-y-4 py-6">
      <div className="flex px-4 justify-between items-center">
        <PageTitle title="Ajouter un Produit" />
      </div>
      <div className="py-4">
        <h4 className="text-primary-blue capitalize w-full py-4 border-b border-solid border-primary-blue">
          Details Principal
        </h4>
        <form action="" className="space-y-8 py-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Type du produit *
              </Label>
              <Input
                id="name"
                placeholder="type de produit"
                onChange={(e) => setProductType(e.target.value)}
              />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Nom du produit
              </Label>
              <Input
                id="name"
                placeholder="e.g ABC Shoes"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                SKU *
              </Label>
              <Input
                id="name"
                placeholder="e.g ABC-DEF-5"
                onChange={(e) => setSku(e.target.value)}
              />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Unité *
              </Label>
              <Input
                id="name"
                placeholder="set Unité"
                onChange={(e) => setUnit(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Dimensions (longueur,largeur,hauteur )
              </Label>
              <Input
                id="name"
                placeholder="Nom du produit"
                onChange={(e) => setDimmensions(e.target.value)}
              />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Poids
              </Label>
              <Input
                id="name"
                placeholder="poids"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Fabricant
              </Label>
              <Input
                id="name"
                placeholder="Fabricant"
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Marque
              </Label>
              <Input
                id="name"
                placeholder="Marque"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                UPC
              </Label>
              <Input
                id="name"
                placeholder="Entrez un numéro unique à 12 chiffres"
                onChange={(e) => setUpc(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                UPC
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                UPC
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <h4 className="text-primary-blue capitalize w-full py-4 border-b border-solid border-primary-blue">
            Informations de vente
          </h4>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Prix de vente *
              </Label>
              <Input
                id="name"
                placeholder="dzd"
                onChange={(e) => setSalePrice(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Description
              </Label>
              <Input
                id="name"
                placeholder="max 3000char"
                className="h-[100px]"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <h4 className="text-primary-blue capitalize w-full py-4 border-b border-solid border-primary-blue">
            Informations d’achat
          </h4>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Prix d’achat *
              </Label>
              <Input
                id="name"
                placeholder="Nom du produit"
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Description
              </Label>
              <Input
                id="name"
                placeholder="max 3000char"
                className="h-[100px]"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-4 pr-10">
            <Button
              type="submit"
              className="rounded-xl bg-primary-blue "
              onClick={handleSubmit}
              disabled={loading}
            >
              Ajouter le Produit
            </Button>
            <Button
              type="reset"
              className="rounded-xl text-primary-blue shadow-md bg-transparent"
              disabled={loading}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

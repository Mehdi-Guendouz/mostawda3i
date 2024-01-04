import PageTitle from "@/components/Text/PageTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddProduct = () => {
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
              <Input id="name" placeholder="type de produit" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Nom du produit
              </Label>
              <Input id="name" placeholder="e.g ABC Shoes" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                SKU *
              </Label>
              <Input id="name" placeholder="e.g ABC-DEF-5" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Unité *
              </Label>
              <Input id="name" placeholder="set Unité" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Dimensions (longueur,largeur,hauteur )
              </Label>
              <Input id="name" placeholder="Nom du produit" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Poids
              </Label>
              <Input id="name" placeholder="poids" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Fabricant
              </Label>
              <Input id="name" placeholder="Fabricant" />
            </div>{" "}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Marque
              </Label>
              <Input id="name" placeholder="Marque" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                UPC
              </Label>
              <Input
                id="name"
                placeholder="Entrez un numéro unique à 12 chiffres"
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
              <Input id="name" placeholder="dzd" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Description
              </Label>
              <Input
                id="name"
                placeholder="max 3000char"
                className="h-[100px]"
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
              <Input id="name" placeholder="Nom du produit" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-primary-blue">
                Description
              </Label>
              <Input
                id="name"
                placeholder="max 3000char"
                className="h-[100px]"
              />
            </div>
          </div>
          <div>
            <button>submit</button>
            <button></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

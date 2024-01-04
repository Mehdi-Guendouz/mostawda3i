import Zaki from "@/assets/Zakii.jpg";
import PageTitle from "../Text/PageTitle";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import wilaya_names from "../AlgeriaCities/AlgerianCities";
import timeZones from "../Timezones/Timezones";

function submitForm() {
  console.log("submitted");
}
function updateButton() {
  console.log("update");
}
function deleteButton() {
  console.log("delete");
}

export function UserInfoForm() {
  return (
    <div className="main">
      <PageTitle title="Paramètres" />
      <div className="formBloc w-[75%] mt-5 pl-8 rounded-xl py-3 flex flex-col bg-gray-200">
        <form action="#" onSubmit={submitForm}>
          <div className="pfp flex w-full  items-center">
            <img className="rounded-full w-[177px]" src={Zaki} />
            <div className="w-[200px] ml-[72px] flex buttons flex-col">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="rounded-xl bg-primary-blue mt-4 mb-2"
                  >
                    Mise à jour
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Mise à jour photo</DialogTitle>
                    <DialogDescription>
                      Télécharger la nouvelle photo.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <Input
                      type="file"
                      id="photoupload"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-flow-col gap-0">
                    <DialogClose>
                      <Button type="button" variant={"secondary"}>
                        Annuler
                      </Button>
                    </DialogClose>
                    <DialogClose>
                      <Button
                        type="submit"
                        onClick={updateButton}
                        className="rounded-xl bg-primary-blue"
                      >
                        Enregistrer
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                type="button"
                onClick={deleteButton}
                className="rounded-xl text-red-500 border-2 border-red-500 bg-transparent mt-2 mb-2"
              >
                Supprimer
              </Button>
            </div>
          </div>
          <div className="inputs my-4 grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="name" className="text-text-blue">
              Nom
            </Label>
            <Input
              className="bg-secondary-gray-300"
              id="name"
              placeholder="Amine Rahmouni"
            ></Input>
          </div>
          <div className="inputs my-4 grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="email" className="text-text-blue">
              Email
            </Label>
            <Input
              className="bg-secondary-gray-300"
              id="email"
              placeholder="rahmouni@gmail.com"
            ></Input>
          </div>
          <div className="inputs my-4 grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="pays" className="text-text-blue">
              Pays
            </Label>
            <Select>
              <SelectTrigger className="bg-secondary-gray-300">
                <SelectValue placeholder="Pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dz">Algérie</SelectItem>
                <SelectItem value="fr">France</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="inputs my-4 grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="wilaya" className="text-text-blue">
              État
            </Label>
            <Select>
              <SelectTrigger className="bg-secondary-gray-300">
                <SelectValue placeholder="État" />
              </SelectTrigger>
              <SelectContent>
                {wilaya_names.map((name, index) => (
                  <SelectItem key={index} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="inputs my-4 grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="langue" className="text-text-blue">
              Langue
            </Label>
            <Select>
              <SelectTrigger className="bg-secondary-gray-300">
                <SelectValue placeholder="Langue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="eng">Anglais</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="heureDate grid grid-flow-col gap-[40px] max-w-xl">
            <div>
              <Label className="text-text-blue">Format date</Label>
              <Select>
                <SelectTrigger className="bg-secondary-gray-300">
                  <SelectValue placeholder="Format Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ddmmyyyy">JJ/MM/AAAA</SelectItem>
                  <SelectItem value="mmddyyyy">MM/JJ/AAAA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-text-blue">Format horaire</Label>
              <Select>
                <SelectTrigger className="bg-secondary-gray-300">
                  <SelectValue placeholder="Format heure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">24h</SelectItem>
                  <SelectItem value="12h">12h</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="inputs my-4 grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="fuseau" className="text-text-blue">
              Fuseau horaire
            </Label>
            <Select>
              <SelectTrigger className="bg-secondary-gray-300">
                <SelectValue placeholder="Fuseau horaire" />
              </SelectTrigger>
              <SelectContent>
                {timeZones.map((zone, index) => (
                  <SelectItem
                    className="text-gray-700"
                    key={index}
                    value={zone.name}
                  >
                    {zone.offset} {zone.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className=" flex items-center gap-4 justify-end w-full">
            <Button
              type="submit"
              className="rounded-xl bg-primary-blue w-[200px] mb-[20px]"
            >
              Sauvegarder
            </Button>
            <Button
              type="reset"
              className="rounded-xl text-primary-blue w-[200px] mb-[20px] border-2 border-primary-blue bg-transparent"
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

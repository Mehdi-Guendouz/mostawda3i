import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

const AddDepenseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        onClick={onOpen}
        className="bg-white group text-[#2B3674] flex items-center justify-center  gap-5 py-6 px-10"
      >
        <span className="flex items-center justify-center rounded-base py-2 px-3 bg-background ">
          <Icons.FaPlus className="" />
        </span>
        Nouvelle Vente
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddDepenseModal;

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  CarouselMainContainer,
  CarouselThumbsContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselProvider,
} from "./carousel";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Button } from "../ui/button";
import {
  CustomUploadInput,
  FileUploadCarouselProvider,
  SliderMainItemWithRemove,
  SliderMiniItemWithRemove,
} from "./FileUpload";
import { AspectRatio } from "../ui/aspect-ratio";

export type FilePreview = {
  file: File;
  preview: string;
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Model = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className={cn(
          "",
          buttonVariants({
            variant: "outline",
          })
        )}
      >
        Open Dialog
      </DialogTrigger>
      <DialogContent className="max-w-md p-3 w-full">
        <ImageUpload />
        <div className="flex items-center justify-end gap-2">
          <Button variant={"outline"} onClick={() => setIsOpen(!open)}>
            <span>Cancel</span>
          </Button>
          <Button>
            <span>Submit</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const ImageUpload = () => {
  return (
    <div className="max-w-md w-full">
      <MultiCarousel />
    </div>
  );
};

const MultiCarousel = () => {
  const [preview, setPreview] = useState<FilePreview[] | null>(null);
  return (
    <CarouselProvider>
      <FileUploadCarouselProvider
        value={preview}
        onValueChange={setPreview}
        dropzoneOptions={{
          maxFiles: 5,
          maxSize: 1024 * 1024 * 4,
          multiple: true,
        }}
      >
        {preview && preview.length > 0 ? (
          <>
            {preview.length > 1 && (
              <>
                <CarouselPrevious className="-left-2 z-[100] top-[35%] -translate-y-1/2 h-6 w-6" />
                <CarouselNext className="-right-2 z-[100] top-[35%] -translate-y-1/2 h-6 w-6" />
              </>
            )}
            <CarouselMainContainer className="space-y-1">
              {preview.map((file, i) => (
                <SliderMainItemWithRemove key={i} index={i}>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={file.preview}
                      alt="preview"
                      className="rounded-md object-cover w-full h-full"
                    />
                  </AspectRatio>
                </SliderMainItemWithRemove>
              ))}
            </CarouselMainContainer>
            <CarouselThumbsContainer>
              {preview.map((file, i) => (
                <SliderMiniItemWithRemove key={i} index={i}>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={file.preview}
                      alt="preview"
                      className="rounded-md object-contain h-full w-full"
                    />
                  </AspectRatio>
                </SliderMiniItemWithRemove>
              ))}
            </CarouselThumbsContainer>
            <CustomUploadInput className="border-none">
              <Button type="button" variant="outline" className={cn(`w-full`)}>
                Choose another image
              </Button>
            </CustomUploadInput>
          </>
        ) : (
          <CustomUploadInput isLOF={false}>
            <div className="flex items-center justify-center flex-col pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                &nbsp; or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
              </p>
            </div>
          </CustomUploadInput>
        )}
      </FileUploadCarouselProvider>
    </CarouselProvider>
  );
};

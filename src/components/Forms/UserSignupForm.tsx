import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button
        variant="outline"
        className="text-text-blue"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Se connecter avec Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Ou</span>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-5">
          <div className="grid gap-2">
            <Label className="text-text-blue" htmlFor="text">
              Nom d’utilisateur<span className="text-secondary-blue">*</span>
            </Label>
            <Input
              id="text"
              placeholder="youxxraa"
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-text-blue" htmlFor="email">
              Email<span className="text-secondary-blue">*</span>
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-3">
            <Label className="text-text-blue" htmlFor="email">
              Mot de passe<span className="text-secondary-blue">*</span>
            </Label>
            <Input
              id="email"
              placeholder="Min. 8 characters"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-3">
            <Label className="text-text-blue" htmlFor="email">
              Confirmer Mot de passe
              <span className="text-secondary-blue">*</span>
            </Label>
            <Input
              id="email"
              placeholder="Min. 8 characters"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            S’inscrire
          </Button>
        </div>
      </form>
    </div>
  );
}

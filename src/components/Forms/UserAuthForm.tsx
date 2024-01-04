import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { axiosInstance } from "@/api/config";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };
    if (email === "" || password === "") {
      return;
    }
    setIsLoading(true);
    axiosInstance
      .post("/auth/register", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
        setIsLoading(false);
      });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button
        variant="outline"
        type="button"
        className="rounded-base"
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
      <form onSubmit={handleSubmit}>
        <div className="grid gap-5">
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Email*
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-3">
            <Label className="" htmlFor="email">
              Mot de passe*
            </Label>
            <Input
              id="email"
              placeholder="Min. 8 characters"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin rounded-base" />
            )}
            Se connecter
          </Button>
        </div>
      </form>
    </div>
  );
}

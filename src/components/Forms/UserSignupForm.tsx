import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { axiosInstance } from "@/api/config";
import { useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      email,
      password,
      fullName,
      confirmPassword,
    };
    if (
      email === "" ||
      password === "" ||
      fullName === "" ||
      confirmPassword === ""
    ) {
      return;
    }
    if (password !== confirmPassword) {
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
        setFullName("");
        setConfirmPassword("");
        setIsLoading(false);
      });
  };

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
      <form onSubmit={handleSubmit}>
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
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
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

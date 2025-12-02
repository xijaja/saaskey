import Logo from "@/components/blocks/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm rounded-4xl px-6 py-10 pt-14">
        <CardContent className="">
          <div className="flex flex-col items-center space-y-8">
            <Logo className="h-12 w-12" />

            <div className="space-y-2 text-center">
              <h1 className="font-semibold text-3xl text-foreground">Welcome back!</h1>
              <p className="text-muted-foreground text-sm">
                First time here?{" "}
                <a className="text-foreground hover:underline" href="/signup">
                  Sign up for free
                </a>
              </p>
            </div>

            <div className="w-full space-y-4">
              <Input className="w-full rounded-xl" placeholder="Your email" type="email" />
              <div className="flex flex-col gap-2">
                <Button className="w-full rounded-xl" size="lg">
                  Send me the magic link
                </Button>
                <Button className="w-full text-muted-foreground text-sm" variant="link">
                  Sign in using password
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1" />
                <span className="text-muted-foreground text-sm">OR</span>
                <Separator className="flex-1" />
              </div>

              <Button className="w-full rounded-xl" size="lg" variant="outline">
                Login with Google
              </Button>
              <Button className="w-full rounded-xl" size="lg" variant="outline">
                Login with GitHub
              </Button>
            </div>

            <p className="w-11/12 text-center text-muted-foreground text-xs">
              You acknowledge that you read, and agree, to our{" "}
              <a className="underline hover:text-foreground" href="/legal/terms-of-service">
                Terms of Service
              </a>{" "}
              and our{" "}
              <a className="underline hover:text-foreground" href="/legal/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/header";

function AuthPage() {
  return (
    <main className="h-screen ">
      <section className="bg-hero h-96 from-inherit">
        {/* Headers */}
        <Header />
        {/* Hero */}
        <div className="flex flex-col items-center  justify-center text-slate-100 container h-40 mt-16">
          <h1 className="text-base lg:text-4xl font-semibold">
            Unlimited movies, TV show, and more
          </h1>
          <p className="text-xs lg:text-base">Watch anywhere. Cancel anytime</p>
          <p className="text-xs lg:text-base">
            Ready to watch? Enter your email to create or restart your membership
          </p>
          <div className="flex gap-4 p-4 w-96">
            <Input type="search" placeholder="Email Address" className="bg-slate-950" />
            <Button className="bg-red-600" variant="ghost">
              Get Started
              <ChevronRight />
            </Button>
          </div>
        </div>
      </section>
      <div className="h-1 bg-slate-950" />
    </main>
  );
}

export default AuthPage;

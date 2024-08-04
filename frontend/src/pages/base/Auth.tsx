import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/header";
import Section from "./components/section";

function AuthPage() {
  return (
    <main className="bg-black">
      <div className="absolute min-h-screen bg-gradient-to-r from-slate-950 indent-10" />
      {/* Section header and hero */}
      <section className="bg-hero from-inherit lg:min-h-screen">
        {/* Headers */}
        <Header />
        {/* Hero */}
        <div className="container mt-16 flex flex-1 flex-col items-center justify-center text-slate-100 lg:h-[500px]">
          <h1 className="text-base font-black lg:text-6xl">Unlimited movies, TV show, and more</h1>
          <p className="text-xs lg:text-base">Watch anywhere. Cancel anytime</p>
          <p className="text-xs lg:text-base">Ready to watch? Enter your email to create or restart your membership</p>
          <div className="flex w-96 gap-4 p-4">
            <Input type="search" placeholder="Email Address" className="bg-slate-950" />
            <Button className="bg-red-600" variant="ghost">
              Get Started
              <ChevronRight />
            </Button>
          </div>
        </div>
      </section>
      {/* separator */}
      <div className="h-2 bg-slate-800" />
      {/* section 1*/}
      <Section
        item={{
          description: `Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.`,
          title: "Enjoy on your TV",
          component: () => {
            return (
              <div className="relative max-sm:h-[350px] lg:h-[500px]">
                <video playsInline autoPlay muted loop className="absolute lg:left-20 lg:top-24">
                  <source src="/default/hero-vid.m4v" type="video/mp4" />
                </video>
                <img src="/default/tv.png" alt="tv" className="absolute" />
              </div>
            );
          },
        }}
      />

      {/* separator */}
      <div className="h-2 bg-slate-800" />
      {/* section 2*/}
      <Section
        className="flex-row-reverse"
        item={{
          description: "  Save your favorites easily and always have something to watch.",
          title: "Download your shows to watch offline",
          component: () => {
            return (
              <div className="relative">
                <img src="/default/stranger-things-lg.png" alt="stranger thing" />
                {/* label */}
                <div className="absolute bottom-4 left-20 flex w-3/5 items-center justify-between overflow-hidden rounded-2xl border-2 border-slate-500 bg-black lg:bottom-8 lg:left-28">
                  <div className="flex items-center">
                    <img src="/default/stranger-things-sm.png" alt="stranger thing" className="m-3 h-10 lg:h-24" />
                    <div className="flex flex-col">
                      <span className="text-sm lg:text-xl">Stranger Things</span>
                      <span className="text-blue-700">Downloading...</span>
                    </div>
                  </div>
                  <img src="/default/download-icon.gif" alt="" className="mr-3 h-12" />
                </div>
              </div>
            );
          },
        }}
      />

      {/* separator */}
      <div className="h-2 bg-slate-800" />
      {/* section 3*/}
      <Section
        item={{
          description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
          title: `Watch everywhere`,
          component: () => {
            return (
              <div className="relative max-sm:h-[350px] lg:h-[500px]">
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="absolute left-[80px] top-[40px] w-[250px] lg:left-[120px] lg:top-[50px] lg:w-[396px]"
                >
                  <source src="/default/video-devices.m4v" type="video/mp4" />
                </video>
                <img src="/default/device-pile.png" alt="tv" className="absolute" />
              </div>
            );
          },
        }}
      />

      {/* separator */}
      <div className="h-2 bg-slate-800" />
      {/* section 4*/}
      <Section
        className="flex-row-reverse"
        item={{
          description:
            "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
          title: "Create profiles for kids",
          component: () => {
            return (
              <div className="relative">
                <img src="/default/kids.png" alt="stranger thing" />
              </div>
            );
          },
        }}
      />
    </main>
  );
}

export default AuthPage;

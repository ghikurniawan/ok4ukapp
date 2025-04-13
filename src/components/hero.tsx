import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./hero-card";
import { FilePlus, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container max-w-screen-2xl px-4 mx-auto grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-5xl font-bold">
            <Image className="mx-auto" src={'/ok4uk-logo.svg'} alt="OK4UK Academy Logo" width={200} height={200}/>
            <h1 className="inline">
                Welcome to <span className="inline bg-gradient-to-r from-yellow-500 to-primary text-transparent bg-clip-text">
              OK4UK Academy
            </span>{" "}
            </h1>
        
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The official platform for certificate creation and verification.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 cursor-pointer">Get Started</Button>

          <Link
            rel="noreferrer noopener"
            href="/login"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <FilePlus className="ml-2 w-5 h-5" />
            Generate Certificate
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
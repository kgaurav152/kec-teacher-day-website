import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";

const WrongRoute = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-slate-50 h-screen">
      <div className="p-4">
        <div className="mx-auto">
          <Image
            src="/ufo.svg"
            alt="ufo's Picture"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="text-2xl text-center drop-shadow-md text-zinc-950">
        <p className="mb-8 text-3xl">Oops! Landed on the wrong Planet</p>
        <Link
          className={cn(buttonVariants({ variant: "destructive" }), "mt-4")}
          href="https://linktr.ee/kgaurav152"
          target="_blank"
        >
          Contact Dev <Settings className="ml-2 h-4 w-4 animate-spin" />
        </Link>
      </div>
    </div>
  );
};

export default WrongRoute;

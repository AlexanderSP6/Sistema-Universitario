import React from "react";

import Combobox from "@/components/ui/Combobox";
import { Button } from "@/components/ui/button";

import Link from "next/link";


export default function PostgradoPage() {
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

  return (
    <div className="flex justify-around">
      <div className="flex flex-col text-center gap-10">
        <Combobox items={frameworks} title="Tipo de postgrado" />

        <h1>
          Requisitos:
        </h1>

        <Button variant="outline">
          <Link href="/cajas">
            Ver ubicación
          </Link>
        </Button>

        <h1>
          Descargar requisito:
        </h1>

      </div>

      <div>
        <iframe
          title="video"
          width="560" 
          height="315"
          src="https://www.youtube.com/watch?v=B7BxrAAXl94&list=RDB7BxrAAXl94&start_radio=1&ab_channel=%E3%82%A2%E3%83%8B%E3%83%97%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB"
          allowFullScreen
        />
      </div>
    </div>
  );
}


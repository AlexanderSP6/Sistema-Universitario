import React from "react"

import { Button } from "./ui/button";
import Select from "./Select"
import Link from "next/link";
import Image from "next/image";
import Video from "./Video";
import QRCode from '../../public/QRCode.png'

interface WindowInformationProps {
  selectItems: {
    value: string,
    label: string
  }[],
  selectTitle: string,
  videoSrc: string,
  windowTitle: string,
}

export default function WindowInformation({ selectItems, selectTitle, videoSrc, windowTitle }: WindowInformationProps) {
  return (
    <div className="flex flex-col justify-around w-full">
      <p className="font-bold text-center mb-8 text-lg">
        {windowTitle}
      </p>

      <div className="flex justify-around w-full">
        <div className="lg:flex-1 flex flex-col items-center text-center gap-10 w-full">
          <div className="flex flex-col lg:flex-col md:flex-row lg:gap-10 gap-5 md:w-[85%] lg:px-24">
            <Select items={selectItems} title={selectTitle} />

            <h1 className="lg:flex hidden text-center">
              Requisitos:
            </h1>

            <Button variant="outline" className="sm:w-full">
              <Link href="/cajas">
                Ver ubicación
              </Link>
            </Button>
          </div>

          {/* Video en pantallas pequeñas */}
          <div className="lg:hidden w-[90%] h-96">
            <Video src={videoSrc} />
          </div>

          <div className="flex lg:flex-col lg:gap-5 items-center w-full justify-around">
            <h1>
              Descargar requisito:
            </h1>

            <Image
              src={QRCode}
              alt="QRExmaple"
              height={50}
              width={200}
            />
          </div>
        </div>

        <div className="lg:flex-1 lg:flex hidden items-center justify-center h-96">
          <Video src={videoSrc} />
        </div>
      </div>
    </div>
  )
}

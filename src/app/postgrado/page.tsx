import React from "react";

import WindowInformation from "@/components/WindowInformation";

const tiposPostgrados = [
  {
    value: "tipo1",
    label: "Postgrado"
  },
  {
    value: "tipo2",
    label: "Maestria"
  },
  {
    value: "tipo3",
    label: "Doctorado"
  },
]

export default function PostgradoPage() {
  return (
    <>
      <WindowInformation 
        windowTitle="Postgrado"
        selectItems={tiposPostgrados} 
        selectTitle="Tipo de postgrado"
        videoSrc="https://www.univalle.edu/wp-content/uploads/2022/07/PHD-EDGAR-FUENTES-comprimido.mp4"
      />
    </>
  );
}


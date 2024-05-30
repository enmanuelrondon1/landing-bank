'use client'
import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export const ControlBilling = () => {
  return (
    <>
      <div className="p-4 py-20 md:py-64">
        <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
          <MotionTransition>
            <Image
              src="https://i.ibb.co/WVnR7yX/control-business.png"
              alt="Control Business"
              width="500"
              height={411}
              className="w-full h-auto"
            />
          </MotionTransition>
          <div className="flex-1 p-6 md:p-8">
            <Reveal >
              <h2 className="text-5xl font-semibold">
                Controla facilmente   <br/>
                tu facturacion
              </h2>
            </Reveal>
            <Reveal >
              <p className="max-w-md mt-10 text-justify">
                Con la tarjeta de credito adecuada, puded mejorar su vida financiera generando credito, obteniendo recompensas y ahorrando dinero. Pero concientos de tarjetas
              </p>
            </Reveal>

          </div>
        </div>
      </div>
    </>
  );
};

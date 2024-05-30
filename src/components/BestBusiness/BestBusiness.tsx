import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusinnes.data";
import Image from "next/image";

export const BestBusiness = () => {
  return (
    <div className="relative px-6 py-20 md:py64" id="features">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Tu haces el negocio
              </span>
              nosotros manejamos <br />
              el dinero
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-8 text-lg text-justify">
              Con la tarjeta de credito adecuada puede mejorar su vida
              financiera generando credito, obteniendo recompnsas y ahorrando
              dinero. Pero con cientos de tarjetas en el mercado
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blueRadial"
              >
                Elige tu plan
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image src={icon} alt={title} width={40} height={40} />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-primaryDark"> {description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";

export const ChooseYourCards = () => {
  return (
    <div className="relative px-6 py-20 md:py-64" id="tarjetas">
      <BackgroundRadialRight />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Elige la tarjeta que mas
            <span className="block degradedBlue bg-blueLight">
              se adapta a tus necesidades
            </span>
          </h2>
        </Reveal>
        <div className="px-5">
          <MotionTransition>
            <Swiper
              // si coloco effect={true} hace otro efecto
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt="Credit card"
                      width="400"
                      height="300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
};

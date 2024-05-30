"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "../Testimonials.data";
import { Reveal } from "@/components/Reveal";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export const Slide = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="h-[250px] w-full md:max-w-5xl "
    >
      {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
        <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
          <Reveal>
            <Image
              src="https://i.ibb.co/3BVBM7m/testimonial-icon.png"
              alt="Testimonial"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <div className="my-5">{testimonial}</div>
            <div className="flex">
              <img
                src={image}
                alt={name}
                width="50"
                height={50}
                className="mr-5"
              />
              <div>
                <h4 className="text-center">{name}</h4>
                <p className="text-primaryDark">{work}</p>
              </div>
            </div>
          </Reveal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

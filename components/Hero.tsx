"use client";

import { heros } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { buttonVariants } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-4rem)]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={750}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        {heros.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1080}
                priority
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2] space-y-4 text-white px-2 w-full">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="text-3xl md:text-7xl leading-10 font-bold uppercase "
                  >
                    {item.heading}
                  </motion.h1>
                </div>
                <div className="overflow-hidden max-w-2xl mx-auto">
                  <motion.p
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="text-sm md:text-lg"
                  >
                    {item.paragraph}
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  >
                    <Link
                      href={`services/${item.link}`}
                      className={buttonVariants({
                        variant: "default",
                        size: "lg",
                        className: "text-white",
                      })}
                    >
                      {item.cta}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

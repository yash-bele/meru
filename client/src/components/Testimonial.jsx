import { useRef } from "react";

import { BiSolidStar } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonial } from "../configs/tesimonial";

const Testimonial = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <section className="mx-5 lg:mx-20 my-20 grid place-items-center bg-slate-900 py-10 lg:py-10 rounded-xl font-montserrat">
        <section className="flex flex-col items-center">
          <div className="text-center mb-5">
            <h1 className="text-slate-400 text-xl font-light">
              What people say about us!
            </h1>
          </div>
          <Swiper
            loop={true}
            speed={500}
            slidesPerView={1}
            initialSlide={0}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="w-[350px] md:w-[700px] rounded-lg overflow-hidden"
          >
            {testimonial.map((i, j) => (
              <SwiperSlide key={j} className="p-5 rounded-lg shadow bg-white">
                <div className="h-[270px] md:h-[170px] flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg font-light text-slate-700">
                      {i.heading}
                    </p>
                    <div className="flex flex-col items-end">
                      <p className="flex space-x-1 text-red-400">
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                      </p>
                      {/* <p className="text-sm text-slate-700">{i.date}</p> */}
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">{i.para}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-700 font-light">{i.name}</p>
                    {/* <img src={i.img} alt="company-logo" /> */}
                    <p className="text-sm text-slate-700">{i.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex items-center justify-center xl:justify-center mt-5 space-x-5">
              <div
                ref={navigationPrevRef}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <BsArrowLeft className="text-xl text-red-500" />
              </div>
              <div
                ref={navigationNextRef}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <BsArrowRight className="text-xl text-red-500" />
              </div>
            </div>
          </Swiper>
        </section>
      </section>
    </>
  );
};

export default Testimonial;

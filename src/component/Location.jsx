import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SlideItem from "./SlideItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Location = () => {
  const slideData = [
    { id: 1, title: "Slide 1", content: "Content for slide 1" },
    { id: 2, title: "Slide 2", content: "Content for slide 2" },
    { id: 3, title: "Slide 3", content: "Content for slide 3" },
    { id: 4, title: "Slide 4", content: "Content for slide 4" },
  ];

  // Create a reference for Swiper
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Locations</h2>
      <div className="flex items-center">
        {/* Swiper Component */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Set the Swiper instance
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideItem title={slide.title} content={slide.content} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-4 justify-center">
          <button onClick={() => swiperRef.current.slidePrev()} className="">
            Previous
          </button>
          <button onClick={() => swiperRef.current.slideNext()} className="">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;

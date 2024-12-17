import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabsName = [" ", " ", " ", " "];

const CircleTaber = () => {
  return (
    <div className="swipeable-tabs">
      <div className="swiper-container flex">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">${tabsName[index]}</span>`;
            },
          }}
          slidesPerView={1}
          loop={true}
        >
          {tabsName.map((tab, index) => (
            <SwiperSlide key={index}>
              <h2>Tab {index + 1}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quas cupiditate cumque suscipit molestiae maiores eveniet et doloribus facere explicabo ipsam dolorem impedit laborum sunt nulla architecto quod, minus rem!
              Obcaecati eius quam culpa nostrum laudantium, officiis facilis molestiae, at placeat dolorum laboriosam rem nobis sunt sit dignissimos impedit repellat aut omnis maiores, voluptates dicta eveniet provident. Ex, sint voluptatem!
              Omnis laboriosam vel tempore corporis sed nostrum magni aperiam totam, quo ex nisi impedit eum placeat amet ducimus nesciunt dolorum, ipsam non, asperiores officiis! Autem cumque nobis iure a beatae!</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CircleTaber;

// import React, { useEffect } from "react";
// import styles from "./Carousel.module.css";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
// import "swiper/css";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();
//   useEffect(() => {
//     swiper.slideTo(0);
//   }, [data]);
//   return <></>;
// };

// function Carousel(data, renderComponent) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         // install Swiper modules
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         spaceBetween={40}
//         slidesPerView={"auto"}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <CarouselRightNavigation />
//         <CarouselLeftNavigation />
//         {data.map((ele) => {
//           <SwiperSlide>{renderComponent(ele)}</SwiperSlide>;
//         })}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;

import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

function Carousel({ data, renderComponent }) {
  // Extract the relevant array from the object, and ensure it's an array
  const dataArray = Array.isArray(data) ? data : [];

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={dataArray} />
        <CarouselRightNavigation />
        <CarouselLeftNavigation />
        {dataArray.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

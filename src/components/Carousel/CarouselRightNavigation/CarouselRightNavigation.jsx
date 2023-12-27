import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/ra.svg";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default CarouselRightNavigation;

// import React, { useEffect, useState } from "react";
// import styles from "./CarouselRightNavigation.module.css";
// import RightArrowSvg from "../../../assets/ra.png"; // Import the SVG as a React component
// import { useSwiper } from "swiper/react";

// function CarouselRightNavigation() {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   useEffect(() => {
//     swiper.on("slideChange", function () {
//       setIsEnd(swiper.isEnd);
//     });
//   }, [swiper]);

//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrowSvg onClick={() => swiper.slideNext()} />}{" "}
//       {/* Use the imported React component */}
//     </div>
//   );
// }

// export default CarouselRightNavigation;

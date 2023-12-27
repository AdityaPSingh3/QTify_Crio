import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/la.svg";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

export default CarouselLeftNavigation;

// import React, { useEffect, useState } from "react";
// import styles from "./CarouselLeftNavigation.module.css";
// import LeftArrowSvg from "../../../assets/la.png"; // Import the SVG as a React component
// import { useSwiper } from "swiper/react";

// function CarouselLeftNavigation() {
//   const swiper = useSwiper();
//   const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

//   useEffect(() => {
//     swiper.on("slideChange", function () {
//       setIsBeginning(swiper.isBeginning);
//     });
//   }, [swiper]);

//   return (
//     <div className={styles.leftNavigation}>
//       {!isBeginning && (
//         <img
//           src={LeftArrowSvg}
//           alt="Left Arrow"
//           onClick={() => swiper.slidePrev()}
//         />
//       )}{" "}
//       {/* Use the imported image */}
//     </div>
//   );
// }

// export default CarouselLeftNavigation;

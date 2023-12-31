// import React, { useState } from "react";
// import styles from "../Section/Section.module.css";
// import Card from "../Card/Card";
// import { CircularProgress } from "@mui/material";

// function Section({ title, data, type }) {
//   const [carouselToggle, setCarouselToggle] = useState(false);

//   const handleToggle = () => {
//     setCarouselToggle((prevState) => !prevState);
//   };
//   return (
//     <div>
//       <div className={styles.header}>
//         <h3>{title}</h3>
//         <h4 onClick={handleToggle} className={styles.toggleText}>
//           {!carouselToggle ? "Collapse All" : "Show All"}
//         </h4>
//       </div>
//       {data.length === 0 ? (
//         <CircularProgress />
//       ) : (
//         <div className={styles.cardWrapper}>
//           {!carouselToggle ? (
//             <div className={styles.wrapper}>
//               {data.map((ele) => {
//                 <Card data={ele} type={type} />;
//               })}
//             </div>
//           ) : null}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Section;

import React, { useState } from "react";
import styles from "../Section/Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;

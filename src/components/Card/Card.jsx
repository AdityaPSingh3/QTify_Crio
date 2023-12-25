// import React from "react";
// import Tooltip from "path/to/Tooltip";
// import Chip from "path/to/Chip";
// import styles from "../Card/Card.module.css";

// function Card(data, type) {
//   const getCard = (data, type) => {
//     switch (type) {
//       case "album": {
//         const { image, title, follows, songs, slug } = data;
//         return (
//           <>
//             <Tooltip title={`${songs.length} songs`} placement="top" arrow>
//               <a href={`/album/${slug}`}>
//                 <div className={styles.wrapper}>
//                   <div className={styles.card}>
//                     <img src={image} alt="song" loading="lazy" />
//                     <div className={styles.banner}>
//                       <Chip
//                         label={`${follows} Follows`}
//                         size="small"
//                         className={styles.chip}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.titleWrapper}>
//                     <p>{title}</p>
//                   </div>
//                 </div>
//               </a>
//             </Tooltip>
//           </>
//         );
//       }
//       case "song": {
//         const { image, likes, title } = data;
//         return (
//           <div className={styles.wrapper}>
//             <div className={styles.card}>
//               <img src={image} alt="song" loading="lazy" />
//               <div className={styles.banner}>
//                 <div className={styles.pill}>
//                   <p>{likes} Likes</p>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.titleWrapper}>
//               <p>{title}</p>
//             </div>
//           </div>
//         );
//       }
//       default:
//         return <></>;
//     }
//   };

//   return getCard(type);
// }

// export default Card;

import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "../Card/Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album":
        return (
          <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={data.image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${data.follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{data.title}</p>
              </div>
            </div>
          </Tooltip>
        );

      case "songs":
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={data.image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <div id={styles.pill}>
                  <p>{data.likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{data.title}</p>
            </div>
          </div>
        );
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;

import React from "react";

import Image from "../../atoms/Image";
import styled from "styled-components";
import styles from "./TripDetailsCard.style";

const TripDetailsCard = ({ tripDetailsList, className }) => {
  const cards = tripDetailsList.map(({ title, location, subtitle, activities, images }) =>
    activities.map(({ title, description, images }) => (
      <div className={`${className} col-xs`}>
        {images.map(({ cropped }) => (
          <Image src={cropped.large.url} />
        ))}
        <h3>{title}</h3>
        <strong>{location}</strong>
        <p>{subtitle}</p>
      </div>
    ))
  );
  return cards;
};

// export default styled(TripDetailsCard)`${styles}`;

export default styled(TripDetailsCard)`
  ${styles};
`;
export { TripDetailsCard as TripDetailsCardVanilla };

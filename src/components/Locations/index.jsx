import React from "react";

import LocationCard from "./LocationCard";

const Locations = ({ dataList }) => {
  return (
    <section className="row row-cols-1 row-cols-md-4 gy-3 gx-4">
      {dataList.map((item) => (
        <div className="col" key={item.id}>
          <LocationCard {...item} />
        </div>
      ))}
    </section>
  );
};

export default Locations;

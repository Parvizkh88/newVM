import React from "react";

const Locations = ({ locationsData }) => {
  return (
    <section className="row row-cols-1 row-cols-md-3">
      {locationsData.map((item) => (
        <div className="col">
          <LocationCard key={item.id} {...item} />
        </div>
      ))}
    </section>
  );
};

export default Locations;

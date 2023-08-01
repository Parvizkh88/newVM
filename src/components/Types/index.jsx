import React from "react";

const Types = ({ locationsData }) => {
  return (
    <section className="row row-cols-1 row-cols-md-3">
      {locationsData.map((item) => (
        <div className="col">
        <TypeCard key={item.id} {...item} />
        </div>
      ))}
    </section>
  );
};

export default Types;

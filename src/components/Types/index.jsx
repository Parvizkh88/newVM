import React from "react";
import TypeCard from "./TypeCard";

const Types = ({ dataList }) => {
  return (
    <section className="row row-cols-1 row-cols-md-3  gy-3 gx-4">
      {dataList.map((item) => (
        <div className="col">
          <TypeCard key={item.id} {...item} />
        </div>
      ))}
    </section>
  );
};

export default Types;

import React, { useEffect, useState } from "react";
import Pruduct from "../Pruduct/Pruduct";
import "./Pruducts.css";

const Pruducts = () => {
  const [pruducts, setPruducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPruducts(data));
  }, []);
  return (
    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4">
      <div className="pruduct-container col-span-3 grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {pruducts.map((pruduct) => (
          <Pruduct pruduct={pruduct} key={pruduct.id}></Pruduct>
        ))}
      </div>
      <div className="pruduct-details text-center">
        <h2 className="font-semibold text-2xl">Order Summary</h2>
      </div>
    </div>
  );
};

export default Pruducts;

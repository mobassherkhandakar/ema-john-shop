import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import Pruduct from "../Pruduct/Pruduct";
import "./Pruducts.css";

const Pruducts = () => {
  const [pruducts, setPruducts] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPruducts(data));
  }, []);
  const handelAddToCard = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
  };
  return (
    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4">
      <div className="pruduct-container col-span-3 grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {pruducts.map((pruduct) => (
          <Pruduct
            pruduct={pruduct}
            key={pruduct.id}
            handelAddToCard={handelAddToCard}
          ></Pruduct>
        ))}
      </div>
      <div className="pruduct-details pl-4">
        <Details card={card}></Details>
      </div>
    </div>
  );
};

export default Pruducts;

import React from "react";

const Details = ({ card }) => {
  console.log(card);
  return (
    <div>
      <h2 className="font-semibold my-4 text-2xl text-center">Order Summary</h2>
      <p>Selected Product: {card.length}</p>
    </div>
  );
};

export default Details;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Pruduct = (props) => {
  console.log(props);
  const { img, name, price, seller } = props.pruduct;
  const handelAddToCard = props.handelAddToCard;
  // console.log(props.pruduct);

  return (
    <div className="">
      <div className="card w-full h-[508px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <div className="card-actions ">
            <button
              onClick={() => handelAddToCard(props.pruduct)}
              className="btn btn-primary absolute left-0 bottom-0 w-full"
            >
              Buy Now
              <FontAwesomeIcon
                style={{ marginLeft: "5px" }}
                icon={faShoppingCart}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pruduct;

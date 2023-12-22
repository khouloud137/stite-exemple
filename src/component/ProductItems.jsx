import React from "react";

function ProductItems(props) {
  return (
    <div className="product-comp">
      <img src={props.img} width={200} />
      <h3 className="product-Name">{props.title}</h3>

      <div className="product-resume">
        <p>{props.resume}</p>
      </div>
      <div className="prix">
        {props.price}
        <span>$</span>
      </div>
    </div>
  );
}

export default ProductItems;

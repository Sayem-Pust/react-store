import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({ title, image, price, id, click }) => {
  // const CartClick = (click) => {
  //   click=+1
  //   console.log(click)
  // }

  return (
    <div className="col-lg-4">
      <img className="thumbnail" src={image} alt="img" />
      <div className="box-element product">
        <h6>
          <strong>{title}</strong>
        </h6>
        <hr />
        <button className="btn btn-outline-secondary btn-add update-cart ">
          Add To Cart
        </button>
        {/* <a href="/" className="btn btn-outline-success">
          View
        </a> */}
        <Link className="btn btn-outline-success" to={`/${id}`}>
          View
        </Link>
        <h4 style={{ display: "inline-block", float: "right" }}>${price}</h4>
      </div>
    </div>
  );
};

export default Product

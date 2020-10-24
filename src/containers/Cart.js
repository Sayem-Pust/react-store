import React, { Component } from "react";
import "./Cart.css";
import arrowUp from "../arrow-up.png";
import arrowdown from "../arrow-down.png";
import axios from "axios";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products"
      )
      .then((res) => {
        this.setState({
          products: res.data,
        });
      });
  }
  render() {
    console.log(this.props.cartProductId);
    const productId = this.props.cartProductId.map((itemId, i) => {
      return this.state.products.map((item) => {
        if (item._id === itemId) {
          return (
            <div className="cart-row" key={i}>
              <div style={{ flex: "2" }}>
                <img className="row-image" src={item.picture} alt="img" />
              </div>
              <div style={{ flex: "2" }}>{item.title}</div>
              <div style={{ flex: "1" }}>${item.price}</div>
              <div style={{ flex: "1" }}>
                <p className="quantity"> 1 </p>
                <div className="quantity">
                  <img
                    data-product="{{ item.product.id }}"
                    className="chg-quantity update-cart"
                    src={arrowUp}
                    alt="arrow up"
                  />

                  <img
                    data-product="{{ item.product.id }}"
                    className="chg-quantity update-cart"
                    src={arrowdown}
                    alt="arrow down"
                  />
                </div>
              </div>
              <div style={{ flex: "1" }}>${item.price}</div>
            </div>
          );
        } else {
          return null;
        }
      });
    });

    return (
      <div className="col-lg-12">
        <div className="box-element">
          <a href="/" className="btn btn-outline-dark">
            &#x2190; Continue Shopping
          </a>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h5>
                    Items: <strong>{this.props.totalCart}</strong>
                  </h5>
                </th>
                <th>
                  <h5>
                    Total: <strong>${this.props.totalPrice}</strong>
                  </h5>
                </th>
                <th>
                  <a
                    href="/"
                    className="btn btn-success"
                    style={{ float: "right", margin: "5px" }}
                  >
                    Checkout
                  </a>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <br />
        <div className="box-element">
          <div className="cart-row">
            <div style={{ flex: "2" }}></div>
            <div style={{ flex: "2" }}>
              <strong>Items</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong>Price</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong>Quantity</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong>Total</strong>
            </div>
          </div>

          {productId}
        </div>
      </div>
    );
  }
}

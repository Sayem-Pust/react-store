import React, { Component } from 'react'
import axios from "axios";


export default class Product_Details extends Component {

    constructor(){
        super()
        this.state = {
            products: [],
            product : {}
        }
    }

    componentDidMount(){
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
      const productID = this.props.match.params.productID;
      const matchId = this.state.products.map((item, i) =>  {
          if (item._id === productID ) {
              return (
                <div key={i} className="row">
                  <div className="col-lg-6">
                    <div className="box-element" style={{ marginLeft: "10px" }}>
                      <img className="thumbnail" src={item.picture} alt="" />
                      <div className="box-element product">
                        <h6 style={{ textAlign: "center" }}>
                          <strong>{item.title}</strong>
                        </h6>
                        {/* <h6 style={{ textAlign: "center" }}>
                <strong>products name</strong>
              </h6> */}
                        <hr />
                        <h5>
                          <strong>${item.price}</strong>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="box-element"
                      style={{ textAlign: "center" }}
                    >
                      <p>
                        Description: <strong>{item.description}</strong>
                      </p>
                      <button className="btn btn-outline-secondary btn-add update-cart">
                        Add To Cart
                      </button>
                    </div>
                    <hr />
                    <div style={{ textAlign: "center" }}>
                      <a href="/" className="btn btn-outline-dark">
                        &#x2190; Continue Shopping
                      </a>
                      <a href="/" className="btn btn-outline-dark">
                        Go to Cart &#8594;
                      </a>
                    </div>
                  </div>
                </div>
              );
          } 
      })
    return (
      <div className="row">
        {matchId}
      </div>
    );
  }
}


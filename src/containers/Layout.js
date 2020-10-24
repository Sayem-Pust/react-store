import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Store from './Store'
import ProductDetails from '../components/Product_Details'
import Cart from './Cart'
import { Route, Switch } from "react-router-dom";

const getPrice = (a) => {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
}

export default class Layout extends Component {
  state = {
    totalClick: 0,
    cartProductId: [],
    price: [],
    count: 0
  };

  onHandleCartProduct = (id, price) => {
    console.log(price);
    let count = 0
     this.state.cartProductId.map(item => {
      console.log(item);
      if(item === id) {
        return (
          this.setState({count: count++})
        )
      } else {
        return count=0
      }
    })
    
    this.setState({
      cartProductId: [...this.state.cartProductId, id],
      totalClick: this.state.totalClick + 1,
      price: [...this.state.price, price]
    });
  };
   
  render() {
    // const tPrice = this.state.price.map((item, i) => {
    //    var total =+ item
    //    return total
    // })
    // console.log(tPrice)
    console.log(this.state.count);
    let tPrice = getPrice(this.state.price);
    console.log(tPrice)
    return (
      <div>
        <Navbar click={this.state.totalClick} />
        <Switch>
          {/* <Route exact path="/" component={Store} /> */}
          <Route
            exact
            path="/cart"
            component={() => <Cart cartProductId={this.state.cartProductId} totalCart={this.state.totalClick} totalPrice={tPrice} />}
          />
          <Route
            exact
            path="/"
            component={() => (
              <Store
                click={this.state.totalClick}
                handleCartProduct={this.onHandleCartProduct}
              />
            )}
          />
          <Route exact path="/:productID" component={ProductDetails} />
        </Switch>
        {/* <Store /> */}
      </div>
    );
  }
}

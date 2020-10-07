import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Store from './Store'
import ProductDetails from '../components/Product_Details'
import { Route, Switch } from "react-router-dom";

export default class Layout extends Component {
    state = {
        totalClick: 10,
    }
  render() {
    return (
      <div>
        <Navbar click={this.state.totalClick} />
        <Switch>
          {/* <Route exact path="/" component={Store} /> */}
          <Route exact path="/" component={() => <Store click={this.state.totalClick} />} />
          <Route exact path="/:productID" component={ProductDetails} />
        </Switch>
        {/* <Store /> */}
      </div>
    );
  }
}

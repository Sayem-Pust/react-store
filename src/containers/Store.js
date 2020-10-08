import React, { Component } from 'react'
import Product from '../components/Product'
import axios from 'axios'
import SearchBox from '../components/Searchbox'

export default class Store extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      sortType: "asc",
      searchfield: "",
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
        console.log(res.data);
      });
  }

  onSortList = (sortType) => {
    this.setState({
      sortType: sortType,
    });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    // console.log(this.state.searchfield);
    const sortedList = this.state.products.sort((a, b) => {
      const isReversed = this.state.sortType === "asc" ? 1 : -1;
      return isReversed * a.title.localeCompare(b.title);
    });
    console.log(sortedList);
    console.log(this.state.searchfield);
    const filterProduct = sortedList.filter(products => {
      return products.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filterProduct)
    const renderSort = filterProduct.map((product, i) => {
      return (
        <Product
          key={i}
          image={product.picture}
          price={product.price}
          title={product.title}
          id={product._id}
          click={this.props.click}
        />
      );
    });
    return (
      <div>
        <div className="row">
          <div className="col-md-6 text-center">
            <p>Sort by name:</p>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.onSortList("asc")}
            >
              Asc
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.onSortList("desc")}
            >
              Desc
            </button>
          </div>
          <div className="col-md-6 text-center" style={{ marginTop: "15px" }}>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          {renderSort}
          {/* <Product />
        <Product />
        <Product />
        <Product /> */}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./containers/Home"

import Product from "./containers/Product"
import ProductDetail from "./containers/ProductDetail"

import Category from "./containers/Category"
import CategoryDetail from "./containers/CategoryDetail"

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ""
    }
  }

  changeSearch = text => {
    this.setState({ search: text })
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Header changeSearch={this.changeSearch} />

          <main>

            <Route path="/" exact render={() => (
              <div>
                <Home search={this.state.search} />
              </div>
            )} />
          
            <Route path="/products" exact render={() => (
              <Product search={this.state.search} />
            )} />

            <Route path="/product/:id/:slug/" exact render={({match}) => (
              <ProductDetail id={match.params.id} slug={match.params.slug} />
            )} />

            <Route path="/categories/" exact render={() => (
              <Category search={this.state.search} />
            )} />

            <Route path="/category/:id/:slug" exact render={({match}) => (
              <CategoryDetail id={match.params.id} slug={match.params.slug} />
            )} />

          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { createContext,useState } from "react";
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

import { data } from "./data";


export const BooksContext = createContext();

export default function App() {

const [state, setstate] = useState({
  bookList: data,
  cart:[]
})


const addToCart = (book) =>setstate({
  ...state,
  cart: state.cart.find((cartItem) => cartItem.id === book.id) 
  ? state.cart.map((cartItem) => cartItem.id === book.id ? {...cartItem, count:cartItem.count +1} : cartItem) 
  : [...state.cart, {...book, count: 1}]
})

  return (
    <BooksContext.Provider value={{state: state, addToCart}}>
    <div className="App">
      <h1>
        Shopping Cart
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
    </BooksContext.Provider>
  );
}

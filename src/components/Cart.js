import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";




const Cart = () => {


const context = useContext(BooksContext)

  const totalCartAmount = context.state.cart.reduce((total, book) => (total = total + book.price * book.count ),0)
  .toFixed(2)

 const totalCartCount = context.state.cart
 .reduce((total, book) => ( total = total + book.count),0)

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim ({totalCartCount})</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalCartAmount}</h3>
    {context.state.cart.map((book, id) => <div key={book.id} className="book"> 
    <img src={book.image} alt={book.name} />

    <div>
          <h4>{book.name}</h4>
          <p>Yazar: {book.author}</p>
          <p>Fiyat: &#8378;{book.price}</p>
          <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
          <br />
          <button onClick = {() => context.decrease(book.id)} >-</button>
          <button onClick= {() => context.removeFromCart(book.id)}>Sepetten Çıkar</button>
          <button onClick = {() => context.increase(book.id)}>+</button>
        </div>
    </div>
    )}
    </div>
  );
};

export default Cart;

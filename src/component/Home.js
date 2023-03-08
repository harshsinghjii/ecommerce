import React from "react";
import myImg from "../static/media/Phone.jpeg";
import cart from "../static/media/cart.jpg";
function Home() {
  return (
    <div className="home">
        <div className="add-to-cart">
            <img src={cart} alt="cart"></img>
        </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={myImg} alt="Phone-IMG" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

//1) component > Home.js
//2) container > HomeContainer.js <- Home.js
//3) App.js <- HomeContainer

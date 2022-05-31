import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContextProvider>
      {isCartOpen && <Cart onCartClose={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;

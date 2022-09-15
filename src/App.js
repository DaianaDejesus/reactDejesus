import { NavBar } from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './context/CartContext.js';



const App = () => {

  return (
    <CartProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { CartProvider } from './context/CartContext'

import './App.css'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/checkout'

function App() {

  
// para iniciar este proyecto es "npm run dev"

  return (
      <BrowserRouter>
        <CartProvider>

          <NavBar />

          <Routes>

            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a mi Ecommerce" />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Bienvenidos a mi Ecommerce" />} />
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
            <Route path ="/cart" element={<Cart />} />   
            <Route path='/checkout' element={<Checkout />} />


          </Routes>

        </CartProvider>
      </BrowserRouter>

  )
}

export default App

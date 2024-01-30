import AppLayout from './layout/AppLayout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'

function App() {
  return (
    <div className="text-text">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products/:page" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

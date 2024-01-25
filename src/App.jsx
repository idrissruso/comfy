import AppLayout from './layout/AppLayout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import About from './pages/About'

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

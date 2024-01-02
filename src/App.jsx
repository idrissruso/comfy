import AppLayout from './layout/AppLayout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

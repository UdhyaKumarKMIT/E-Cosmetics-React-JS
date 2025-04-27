import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ShopProvider } from "./context/context"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopProvider>
  )
}

export default App

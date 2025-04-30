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
          <Route path="/E-Cosmetics-React-JS/" element={<Home />} />
          <Route path="/E-Cosmetics-React-JS/login" element={<Login />} />
          <Route path="/E-Cosmetics-React-JS/signup" element={<Signup />} />
          <Route path="/E-Cosmetics-React-JS/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopProvider>
  )
}

export default App

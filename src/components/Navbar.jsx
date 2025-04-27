"use client"

import { Navbar, Nav, Container, Button, Badge, Dropdown } from "react-bootstrap"
import { Link, href, useNavigate } from "react-router-dom"
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa"
import { useShop } from "../context/context"
import { useState } from "react"

const NavbarComponent = () => {
  const { user, getCartCount, logout } = useShop()
  const cartCount = getCartCount()
  const [expand, setExpand] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => setExpand(false)
  const shopCosmetics = () => {
    // Scroll to the section with id="products"
    window.location.hash = "#products";
    handleClose();
  }
  
  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Navbar bg="light" expanded={expand} expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <img src="naturalbeauty.svg" alt="GlowUp Cosmetics" height="40" className="d-inline-block align-top me-2" />
          GlowUp Cosmetics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(expand ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#Home" className="mx-2" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link href="#Top-Products" className="mx-2" onClick={handleClose}>
              Top Products
            </Nav.Link>
            <Nav.Link href="#About" className="mx-2" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link href="#Contact" className="mx-2" onClick={handleClose}>
              Contact
            </Nav.Link>

            {user ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="dropdown-user" className="d-flex align-items-center border-0">
                  <FaUser className="me-1" /> {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/cart">
                    Cart
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>
                    <FaSignOutAlt className="me-2" /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link as={Link} to="/login" className="mx-2" onClick={handleClose}>
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart" className="mx-2 position-relative" onClick={handleClose}>
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>

            <Button href="#Products" variant="primary" className="ms-3 rounded-pill px-4" >
              Shop Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent

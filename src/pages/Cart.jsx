"use client"
import { Container, Row, Col, Card, Button, Table, Image, Form, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaTrash, FaArrowLeft, FaShoppingCart } from "react-icons/fa"
import NavbarComponent from "../components/Navbar"
import Footer from "../components/Footer"
import { useShop } from "../context/context"

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, user } = useShop()
  const cartTotal = getCartTotal()
  const shippingCost = cartTotal > 0 ? 5.99 : 0
  const tax = cartTotal * 0.08 // 8% tax

  if (!user) {
    return (
      <>
        <NavbarComponent />
        <main className="py-5 bg-light min-vh-100">
          <Container>
            <Alert variant="warning" className="text-center">
              <h4>Please login to view your cart</h4>
              <div className="mt-3">
                <Button as={Link} to="/login" variant="primary" className="me-2">
                  Login
                </Button>
                <Button as={Link} to="/signup" variant="outline-primary">
                  Sign Up
                </Button>
              </div>
            </Alert>
          </Container>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <main className="py-5 bg-light min-vh-100">
        <Container>
          <h2 className="mb-4 fw-bold">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <Card className="border-0 shadow-sm text-center p-5">
              <Card.Body>
                <FaShoppingCart size={60} className="text-muted mb-4" />
                <h3>Your cart is empty</h3>
                <p className="text-muted mb-4">Looks like you haven't added any products to your cart yet.</p>
                <Button as={Link} to="/" variant="primary" size="lg" className="px-4">
                  Continue Shopping
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              <Col lg={8} className="mb-4 mb-lg-0">
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <Table responsive className="mb-0">
                      <thead>
                        <tr>
                          <th className="border-0">Product</th>
                          <th className="border-0">Price</th>
                          <th className="border-0">Quantity</th>
                          <th className="border-0">Total</th>
                          <th className="border-0"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <Image src={`/${item.image}`} alt={item.name} width={80} className="me-3" />
                                <div>
                                  <h6 className="mb-0">{item.name}</h6>
                                  <small className="text-muted">{item.category}</small>
                                </div>
                              </div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  onClick={() => removeFromCart(item.id)}
                                  className="me-2"
                                >
                                  -
                                </Button>
                                <span>{item.quantity}</span>
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  onClick={() => addToCart(item)}
                                  className="ms-2"
                                >
                                  +
                                </Button>
                              </div>
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                              <Button
                                variant="link"
                                className="text-danger p-0"
                                onClick={() => {
                                  // Remove all of this item
                                  for (let i = 0; i < item.quantity; i++) {
                                    removeFromCart(item.id)
                                  }
                                }}
                              >
                                <FaTrash />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                  <Card.Footer className="bg-white d-flex justify-content-between">
                    <Button as={Link} to="/" variant="outline-primary" className="d-flex align-items-center">
                      <FaArrowLeft className="me-2" /> Continue Shopping
                    </Button>
                    <Button variant="outline-danger" onClick={clearCart}>
                      Clear Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="mb-4">Order Summary</h5>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>&#8377;{cartTotal.toFixed(2)}</span>

                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping</span>
                      <span>${shippingCost.toFixed(2)}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-4">
                      <strong>Total</strong>
                      <strong>${(cartTotal + shippingCost + tax).toFixed(2)}</strong>
                    </div>

                    <Form className="mb-4">
                      <Form.Group className="mb-3">
                        <Form.Label>Promo Code</Form.Label>
                        <div className="d-flex">
                          <Form.Control type="text" placeholder="Enter promo code" className="me-2" />
                          <Button variant="outline-primary">Apply</Button>
                        </div>
                      </Form.Group>
                    </Form>

                    <Button variant="primary" size="lg" className="w-100">
                      Proceed to Checkout
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Cart

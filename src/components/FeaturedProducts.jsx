"use client"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { FaStar, FaShoppingCart } from "react-icons/fa"
import { useShop } from "../context/context"

const FeaturedProducts = () => {
  const { products, addToCart } = useShop()
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <section id="Top-Products" className="featured-products py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Featured Products</h2>
          <p className="lead text-muted">Discover our most loved cosmetics</p>
        </div>

        <Row>
          {featuredProducts.map((product) => (
            <Col key={product.id} md={6} lg={3} className="mb-4">
              <Card className="h-100 product-card border-0 shadow-sm">
                <div className="product-image-container">
                  <Card.Img variant="top" src={`/${product.image}`} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <Button variant="primary" className="rounded-circle p-2" onClick={() => addToCart(product)}>
                      <FaShoppingCart />
                    </Button>
                  </div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title as="h5">{product.name}</Card.Title>
                  <div className="mb-2">
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                    <FaStar className="text-warning" />
                  </div>
                  <Card.Text className="fw-bold">&#8377;{product.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button href="Products" variant="outline-primary" size="lg" className="rounded-pill px-4">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts

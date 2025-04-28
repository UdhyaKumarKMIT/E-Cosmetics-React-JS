"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import { FaStar, FaShoppingCart } from "react-icons/fa"
import { useShop } from "../context/context"

const ProductsGrid = () => {
  const { products, addToCart } = useShop()
  const [filter, setFilter] = useState("all")

  const filteredProducts = filter === "all" ? products : products.filter((product) => product.category === filter)

  return (
    <section id="Products" className="products-grid py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Cosmetics Collection</h2>
          <p className="lead text-muted">Premium quality products for your beauty routine</p>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <Form.Group className="d-flex gap-3">
            <Form.Check
              type="radio"
              label="All Products"
              name="category"
              id="all"
              checked={filter === "all"}
              onChange={() => setFilter("all")}
            />
            <Form.Check
              type="radio"
              label="Skincare"
              name="category"
              id="skincare"
              checked={filter === "skincare"}
              onChange={() => setFilter("skincare")}
            />
            <Form.Check
              type="radio"
              label="Makeup"
              name="category"
              id="makeup"
              checked={filter === "makeup"}
              onChange={() => setFilter("makeup")}
            />
            <Form.Check
              type="radio"
              label="haricare"
              name="category"
              id="haircare"
              checked={filter === "haircare"}
              onChange={() => setFilter("haircare")}
            />
          </Form.Group>
        </div>

        <Row>
          {filteredProducts.map((product) => (
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
                  <Card.Text className="small text-muted">{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 text-center">
                  <Button variant="primary" className="w-100" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProductsGrid

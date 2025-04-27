"use client"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <section id="Contact" className="contact-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Contact Us</h2>
        </div>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4">Get In Touch</h3>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaMapMarkerAlt className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Our Location</h4>
                    <p className="mb-0 text-muted">45,DCL Lab, MIT Road, Chromepet, Chennai-44</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaPhoneAlt className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Phone Number</h4>
                    <p className="mb-0 text-muted">+91 9876543210</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaEnvelope className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Email Address</h4>
                    <p className="mb-0 text-muted">e-cosmetics@mit.india</p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-3">
                    <FaClock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Working Hours</h4>
                    <p className="mb-0 text-muted">Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="h4 mb-4">Send Us a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
                  </Form.Group>

                  <Button type="submit" variant="primary" size="lg" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

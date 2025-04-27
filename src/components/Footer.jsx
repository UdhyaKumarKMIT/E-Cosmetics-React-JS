import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaPaperPlane } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-5">
          <Col lg={4} md={3} className="mb-4 mb-lg-0">
            <h5 className="mb-4 fw-bold">GlowUp Cosmetics</h5>
            <p className="mb-4">
               Natural beauty is the best kind of beauty. We believe in enhancing your natural features with our high-quality cosmetics.

              </p>
            <div className="d-flex gap-3 social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Pinterest">
                <FaPinterestP size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"  className="text-white" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
            </div>
          </Col>

          <Col lg={4} md={3} className="mb-4 mb-lg-0 text-center">
            <h5 className="mb-4 fw-bold">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#Products" className="text-white text-decoration-none">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#About" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#Contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={3} className="mb-4 mb-lg-0">
            <h5 className="mb-4 fw-bold">Customer Service</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="" className="text-white text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="text-white text-decoration-none">
                  Shipping & Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="text-white text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="text-white text-decoration-none">
                  Track Order
                </Link>
              </li>
            </ul>
          </Col>

        </Row>

       

        <Row>
          <Col className="text-center">
            <p className="">
              &copy; {new Date().getFullYear()} GlowUp Cosmetics Udhya Kumar K MIT. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

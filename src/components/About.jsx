import { Container, Row, Col, Image } from "react-bootstrap"

const About = () => {
  return (
    <section id="About" className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Image src="aboutUs.png" alt="About GlowUp Cosmetics" fluid rounded className="shadow" />
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <h2 className="display-5 fw-bold mb-4">About GlowUp Cosmetics</h2>
             
              <p className="mb-4">
                Founded in 1999, GlowUp Cosmetics started with a simple idea: create cosmetics that are good for your
                skin and good for the planet. We make natural products that enhance your beauty without compromising on
                quality. We are the Best Cosmetic Brand in India.
              </p>
              <p className="mb-4">Every product in our collection is:</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Cruelty-free and never tested on animals</li>
                <li className="mb-2">✓ Made with natural, ethically sourced ingredients</li>
                <li className="mb-2">✓ Packaged in eco-friendly, recyclable materials</li>
                <li className="mb-2">✓ Formulated without harmful chemicals</li>
              </ul>
              <p>
                We're proud to create products that make you look good, feel good, and do good for the world around us.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

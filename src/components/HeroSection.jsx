import { Carousel, Button, Container } from "react-bootstrap"

const HeroSection = () => {
  return (
    <Carousel id="Home" fade className="hero-carousel">
      <Carousel.Item>
        <div className="carousel-image-container" style={{ height: "80vh" }}>
          <img className="d-block w-100 h-100 object-fit-cover" src="skincarenature.png" alt="Natural skincare products" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="text-start carousel-content">
          <Container>
            <h1 className="display-3 fw-bold">Discover Your Natural Glow</h1>
            <p className="lead fs-4 mb-4">Premium skincare products made with natural ingredients</p>
            <Button href="#Products" variant="primary" size="lg" className="rounded-pill px-4 py-2 me-3">
              Shop Now
            </Button>
            <Button href="#About" variant="outline-light" size="lg" className="rounded-pill px-4 py-2">
              Learn More
            </Button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container" style={{ height: "80vh" }}>
          <img className="d-block w-100 h-100 object-fit-cover" src="image2Hero.jpg" alt="Luxury makeup collection" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="text-start carousel-content">
          <Container>
            <h1 className="display-3 fw-bold">Elevate Your Beauty Routine</h1>
            <p className="lead fs-4 mb-4">Luxury makeup products for every skin tone</p>
            <Button href="#Products" variant="primary" size="lg" className="rounded-pill px-4 py-2 me-3">
              Shop Collection
            </Button>
            <Button href="#About" variant="outline-light" size="lg" className="rounded-pill px-4 py-2">
              Our Story
            </Button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container" style={{ height: "80vh" }}>
          <img className="d-block w-100 h-100 object-fit-cover" src="image3Hero.jpg" alt="Eco-friendly packaging" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="text-start carousel-content">
          <Container>
            <h1 className="display-3 fw-bold">Beauty That Cares</h1>
            <p className="lead fs-4 mb-4">Eco-friendly products and packaging for a sustainable future</p>
            <Button href="#Products" variant="primary" size="lg" className="rounded-pill px-4 py-2 me-3">
              Explore
            </Button>
            <Button href="#About" variant="outline-light" size="lg" className="rounded-pill px-4 py-2">
              Our Commitment
            </Button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection

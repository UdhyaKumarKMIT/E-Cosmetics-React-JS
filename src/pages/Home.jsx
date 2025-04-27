import NavbarComponent from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FeaturedProducts from "../components/FeaturedProducts"
import ProductsGrid from "../components/ProductsGrid"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <main id="Home">
        <HeroSection />
        <FeaturedProducts />
        <ProductsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home

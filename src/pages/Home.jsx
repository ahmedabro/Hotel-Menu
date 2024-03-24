import { Col, Container, Row } from "react-bootstrap"
import bgImg from '../assets/hero.jpg'
import { Link } from "react-router-dom"
import NavigationCard from "../components/NavigationCard"
import menuImg from '../assets/menu.jpg'
import favImg from '../assets/fav.jpg'
import randomImg from '../assets/random.jpg'

const Home = () => {
  return (
    <>
        <section className="hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="hero-text">
                            <h1>Welcome To The Demo Meal App!</h1>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            <Link to='/about'>Know About Me</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="navigation-section">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} sm={6}>
                        <NavigationCard img={menuImg} text="Menu" navigate="/menu" />
                    </Col>
                    <Col md={4} sm={6}>
                        <NavigationCard img={favImg} text="Favorites" navigate="/favorites" />
                    </Col>
                    <Col md={4} sm={6}>
                        <NavigationCard img={randomImg} text="Random Meal" navigate="/random-meal" />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Home

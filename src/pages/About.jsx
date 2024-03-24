import { Container, Row, Col} from "react-bootstrap"
import InnerBanner from "../components/InnerBanner"
import MyImg from '../assets/me.jpeg'
import ReactLogo from '../assets/React.webp'
import JSLogo from '../assets/js.png'
import TSLogo from '../assets/ts.webp'
import JavaLogo from '../assets/java.png'

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/Ahmed_Farooq_Updated_Resume_.pdf';
    link.download = 'Ahmed_Farooq_Updated_Resume_.pdf'; 
    link.click();
  };

  return (
    <>
      <InnerBanner title="About Me" />
      <section className="abt-section pt-5 pb-5 mt-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>I am Ahmed Farooq</h1>
              <p>
              Experienced software developer adept in both frontend and
              backend technologies including JavaScript, TypeScript, ReactJS, Java, SQL, Node.js, and MongoDB. Passionate about
              crafting efficient, user-centric solutions and staying updated
              with emerging technologies
              </p>
              <h2>Skills:</h2>
              <div className="skills-logos">
                <img src={ReactLogo} alt="" />
                <img src={JSLogo} alt="" />
                <img src={TSLogo} alt="" />
                <img src={JavaLogo} alt="" />
              </div>
              <h2>Here's My Resume:</h2>
              <button onClick={handleDownload}>Download PDF</button>
            </Col>
            <Col md={6}>
              <img src={MyImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About

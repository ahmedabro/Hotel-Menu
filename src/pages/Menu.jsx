import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import NavigationCard from "../components/NavigationCard"
import InnerBanner from "../components/InnerBanner"
import Loading from "../components/Loading"

const Menu = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make GET request to the desired URL
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')

        // Set the data received from the server
        setData(response.data.categories)
      } catch (error) {
        // Handle any errors
        setError(error)
      } finally {
        // Update loading state regardless of success or failure
        setLoading(false)
      }
    }

    // Call fetchData function when component mounts
    fetchData();
  }, [])

  console.log(data)

  return (
    <>
      <InnerBanner title="Menu" />
      {loading ? <Loading /> :
      <section className="menu-section">
          <Container>
            <Row className="justify-content-center">
              <h1 className="text-center section-heading">Bon Appetite!</h1>
              {data.map((category) => {
                return (
                  <Col md={4} sm={6}>
                    <NavigationCard img={category.strCategoryThumb} text={category.strCategory} navigate={`/meals/${category.strCategory}`} />
                  </Col>
                )
              })}
            </Row>
          </Container>
      </section>}
    </>
  )
}

export default Menu

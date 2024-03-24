import { useEffect, useState } from "react"
import InnerBanner from "../components/InnerBanner"
import axios from "axios"
import { useFavorites } from "../contexts/FavoriteContext"
import { Container, Row, Col } from "react-bootstrap"
import Loading from "../components/Loading"
import MealCard from "../components/MealCard"
import { FaArrowsRotate } from "react-icons/fa6"

const RandomMeal = () => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  const {favorites, addToFavorites, removeFromFavorites} = useFavorites()

  const handleToggleFavorite = (item) => {

    if(favorites?.some(fav => fav.idMeal === item.idMeal)) {
        removeFromFavorites(item)
    }
    else {
        addToFavorites(item)
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        setData(response.data.meals)
      }
      catch(error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [count])

  console.log(data)
  return (
    <>
      <InnerBanner title="Random Meal" />
      <section className="random-meal-section">
      <Container>
          <Row className="justify-content-center">
          {
            !loading ?
            data?.map((fav) => {
              return (
                <Col md={4} sm={6} key={fav.idMeal}>
                  <MealCard meal={fav} handleToggleFavorite={handleToggleFavorite} />
                </Col>
              )
            })
            :
            <Loading />
          }
          </Row>
          <div className="d-flex justify-content-center">
            <button className="text-center refresh-btn" onClick={() => setCount(prevCount => prevCount + 1)}>Generate <FaArrowsRotate /></button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default RandomMeal

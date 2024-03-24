import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import InnerBanner from "../components/InnerBanner"
import Loading from "../components/Loading"
import MealCard from "../components/MealCard"
import { useFavorites } from "../contexts/FavoriteContext"

const Meals = () => {
    const params = useParams()


    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    const { favorites, addToFavorites, removeFromFavorites } = useFavorites()

    // Function to handle clicking on a button to toggle its favorite status
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
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
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
    }, [])

    console.log(data)

    console.log("Favs: ", favorites)

  return (
    <>
        <InnerBanner title={params.category} />
        {loading ? <Loading /> : 
            <section className="meals-section">
                <Container>
                    <Row className="justify-content-center">
                        {data.map((meal, index) => {
                            return (
                                <Col md={4} sm={6} key={meal.idMeal}>
                                    <MealCard meal={meal} handleToggleFavorite={handleToggleFavorite}  />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        }
    </>
  )
}

export default Meals

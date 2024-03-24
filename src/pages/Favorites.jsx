import { Container, Row, Col } from "react-bootstrap"
import InnerBanner from "../components/InnerBanner"
import { useFavorites } from "../contexts/FavoriteContext"
import MealCard from "../components/MealCard"

const Favorites = () => {

  const {favorites, addToFavorites, removeFromFavorites} = useFavorites()

  const handleToggleFavorite = (item) => {

    if(favorites?.some(fav => fav.idMeal === item.idMeal)) {
        removeFromFavorites(item)
    }
    else {
        addToFavorites(item)
    }

  };

  return (
    <>
      <InnerBanner title="My Favorites" />
      <section className="fav-section">
        <Container>
          <Row className="justify-content-center">
          {
            favorites.length != 0 ?
            favorites.map((fav) => {
              return (
                <Col md={4} sm={6} key={fav.idMeal}>
                  <MealCard meal={fav} handleToggleFavorite={handleToggleFavorite} />
                </Col>
              )
            })
            :
            <h1 className="text-center">No Favorites Added</h1>
          }
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Favorites

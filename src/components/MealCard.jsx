import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { useFavorites } from "../contexts/FavoriteContext"


const MealCard = (props) => {
    const {favorites} = useFavorites()
  return (
    <div className="meal-card">
      <div className="meal-img">
        <img src={props.meal.strMealThumb} alt="" />
      </div>
      <div className="meal-description text-center">
        <h4>{props.meal.strMeal}</h4>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <button onClick={() => props.handleToggleFavorite(props.meal)}>{favorites.some(fav => fav.idMeal === props.meal.idMeal) ? <FaHeart /> : <FaRegHeart />}</button>
      </div>
    </div>
  )
}

export default MealCard

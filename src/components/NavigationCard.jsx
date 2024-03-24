import { Link } from "react-router-dom"

const NavigationCard = (props) => {
  return (
    <Link to={props.navigate}>
        <div className="nav-box">
        <img src={props.img} alt="" />
        <h4>{props.text}</h4>
        </div>
    </Link>
  )
}

export default NavigationCard

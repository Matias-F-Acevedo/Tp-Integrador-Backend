import "./cardComments.css";
import { BsFillStarFill } from "react-icons/bs";



export default function CardComments({stars, name, bday, text, img}) {
  const quantityStars = new Array(stars).fill(1);

  return (
    <div className="card-container">
      <div className="star-container">
        {quantityStars && quantityStars.map((el,index) => (
            <BsFillStarFill size={30} color="#efb810" key={index} />
        ))}
      </div>
      <h3>{name}<span className="bday">{bday}</span></h3>
      <p>{text}</p>
      <div>
      <img src={img} className="people-img"/>
      </div>
    </div>
  );
}

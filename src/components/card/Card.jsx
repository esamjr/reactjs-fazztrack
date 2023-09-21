import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./card.css";

function Card(props) {
  const { id, imgProd, price, name } = props;

  return (
    <div className="card mb-4">
      <Link to={`/prod/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <img src={imgProd} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">${price}</p>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  imgProd: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
};

export default Card;

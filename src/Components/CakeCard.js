import { Link } from "react-router-dom";

const CakeCard = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        borderWidth: "2px",
        borderColor: " gold",
        padding: "7px",
        margin: "4px",
      }}
    >
      <Link to={"/cakedetails/" + props.cake.cakeid + "/" + props.cake.image}>
        <img 
          src={"./image/" + props.cake.image}
          className="card-img-top"
          alt="..."
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.cake.name}</h5>
        <p className="card-text">Price: {props.cake.price}</p>
        <a href=".." className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CakeCard;

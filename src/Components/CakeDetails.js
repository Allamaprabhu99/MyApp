import { useParams } from "react-router-dom";

const CakeDetails = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <div style={{ marginBottom: "550px" }}>
      <div>
        <h3
          style={{
            borderStyle: "solid",
            borderColor: " gold",
            padding: "7px",
            marginBottom: "10px",
            display: "inline-block",
          }}
        >
          Cake Details
        </h3>
      </div>
      <img
        style={{
          width: "18rem",
          borderWidth: "2px",
          borderColor: " gold",
          padding: "7px",
          margin: "4px",
        }}
        src={"/image/" + params.img}
        alt="."
      />
      <h4>ID: {params.id}</h4>
    </div>
  );
};

export default CakeDetails;
